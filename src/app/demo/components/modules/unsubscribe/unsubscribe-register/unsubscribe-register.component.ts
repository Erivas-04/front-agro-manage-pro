import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { RemoveAnimalFood, UnsubscribeAnimalDTO } from 'src/app/interfaces/Request';
import { Cage, Message } from 'src/app/interfaces/Response';
import { AnimalMovementService } from 'src/app/service/api/animal-movement.service';
import { AnimalfoodMovementApiService } from 'src/app/service/api/animalfood-movement-api.service';

@Component({
  selector: 'app-unsubscribe-register',
  templateUrl: './unsubscribe-register.component.html'
})
export class UnsubscribeRegisterComponent implements OnInit{
  @Output() close = new EventEmitter();
  @Output() eventInCage = new EventEmitter();
  @Output() invalidMovement = new EventEmitter();
  @Input({required: true}) cageSelect: Cage;
  // injecciones
  private formBuilder = inject(FormBuilder);
  private animalMovementService = inject(AnimalMovementService);
  private animalFoodMovementService = inject(AnimalfoodMovementApiService);
  
  // variables globales
  public actionSelect: number = 0;

  //formularios de registros
  public deleteAnimalCageMovementForm: FormGroup;
  public addAnimalCageMovementForm: FormGroup;

  public AnimalFoodCageMovementForm: FormGroup;

  // barra de seleccion de accion
  public items = [
    {label: 'Concentrado', command: ()=> {
      this.actionSelect = 0;
    }},
    {label: 'Animales', command: () => {
      this.actionSelect = 1;
    }}
  ]

  public typeOfAnimalRegister: SelectItem[] = [
    {label: 'Ingreso', value: 0},
    {label: 'Salida', value: 1},
    {label: 'Muerte', value: 2}
  ]
  public typeofAnimalRegisterSelected: any;

  public typeOfAnimalFoodRegister: SelectItem[] = [
    { label: 'Uso diario', value: 0 },
    { label: 'Ingreso', value: 1 }
  ]
  public typeOfAnimalFoodRegisterSelected: any;

  ngOnInit(): void {
    this.typeofAnimalRegisterSelected = 0;
    this.typeOfAnimalFoodRegisterSelected = 0;

    // formularios de animales
    this.deleteAnimalCageMovementForm = this.formBuilder.group({
      weight: [0],
      age: [0],
      type: [0]
    });

    this.addAnimalCageMovementForm = this.formBuilder.group({
      animals_amount: [0],
    });

    // formularios de concentrados
    this.AnimalFoodCageMovementForm = this.formBuilder.group({
      amount: [0]
    })
  }

  registerMovement(): void {
    const asig = localStorage.getItem("asig");

    if(this.actionSelect == 0) {

      const asig = localStorage.getItem("asig");
      const action = this.typeOfAnimalFoodRegisterSelected;
      const amount = this.AnimalFoodCageMovementForm.value.amount;
      const body: RemoveAnimalFood = {
        id_cage: this.cageSelect.id,
        amount: this.AnimalFoodCageMovementForm.value.amount,
        type: this.typeOfAnimalFoodRegisterSelected
      }

      if (action == 0) {

        if (amount > this.cageSelect.concentrateAsigned.concentrateAmount) {
          let message: Message = {
            message: "El concentrado usado es mayor al concentrado disponible"
          };
          this.invalidMovement.emit(message);
          return
        }

        this.animalFoodMovementService.registerAnimalfood(parseInt(asig), body)
        .subscribe({
          next: data => {
            this.eventInCage.emit(data);
          }, 
          error: error => {
            console.error(error);
          }
        });
      }
      else if (action == 1) {
        this.animalFoodMovementService.registerAnimalfood(parseInt(asig), body)
        .subscribe({
          next: data => {
            this.eventInCage.emit(data);
          }, 
          error: error => {
            console.error(error);
          }
        })
      }
      
    } 
    else if(this.actionSelect == 1) {
      
      
      const action = this.typeofAnimalRegisterSelected;
      if (action > 0) {

        if (this.cageSelect.animalAsigned.animalAmount == 0) {
          let message: Message = {
            message: 'El corral no tiene animales'
          };
          this.invalidMovement.emit(message);
          return
        }

        const body: UnsubscribeAnimalDTO = {
          weight: this.deleteAnimalCageMovementForm.value.weight,
          age: this.deleteAnimalCageMovementForm.value.age,
          id_cage: this.cageSelect.id,
          type_of_movement: action,
          amount: 1
        }
        this.animalMovementService.reportAnimal(parseInt(asig), body)
        .subscribe({
          next: data => {
            this.eventInCage.emit(data);
          },
          error: error => {
            console.error(error);
          }
        });
      }
      else {
        const body: UnsubscribeAnimalDTO = {
          weight: 0,
          age: 0,
          id_cage: this.cageSelect.id,
          type_of_movement: action,
          amount: this.addAnimalCageMovementForm.value.animals_amount
        }

        this.animalMovementService.reportAnimal(parseInt(asig), body)
        .subscribe({
          next: data => {
            this.eventInCage.emit(data);
          },
          error: error => {
            console.error(error);
          }
        })
      }
    }
  }
}

import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { UnsubscribeAnimalDTO } from 'src/app/interfaces/Request';
import { Cage } from 'src/app/interfaces/Response';
import { AnimalMovementService } from 'src/app/service/api/animal-movement.service';
import { AnimalfoodMovementApiService } from 'src/app/service/api/animalfood-movement-api.service';

@Component({
  selector: 'app-unsubscribe-register',
  templateUrl: './unsubscribe-register.component.html'
})
export class UnsubscribeRegisterComponent implements OnInit{
  @Output() close = new EventEmitter();
  @Output() eventInCage = new EventEmitter();
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

      if (action == 0) {
        this.animalFoodMovementService.removeAnimalFoodPOST(parseInt(asig), this.cageSelect.id, amount)
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
        this.animalFoodMovementService.addAnimalFoodPOST(parseInt(asig), this.cageSelect.id, amount)
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
        const body: UnsubscribeAnimalDTO = {
          weight: this.deleteAnimalCageMovementForm.value.weight,
          age: this.deleteAnimalCageMovementForm.value.age
        }
        this.animalMovementService.unsubscribeAnimalPOST(body, parseInt(asig), this.cageSelect.id, action)
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
        const amount = this.addAnimalCageMovementForm.value.animals_amount;

        this.animalMovementService.subscribeAnimalPOST(parseInt(asig), this.cageSelect.id, amount)
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

import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { UnsubscribeAnimalDTO } from 'src/app/interfaces/Request';
import { Cage } from 'src/app/interfaces/Response';
import { AnimalMovementService } from 'src/app/service/api/animal-movement.service';

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
  
  // variables globales
  public actionSelect: number = 0;

  //formularios de registros
  public delteCageMovementForm: FormGroup;
  public addCageMovementForm: FormGroup;

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

  ngOnInit(): void {
    this.delteCageMovementForm = this.formBuilder.group({
      weight: [0],
      age: [0],
      type: [0]
    });

    this.addCageMovementForm = this.formBuilder.group({
      animals_amount: [0],
    })
  }

  registerMovement(): void {
    console.log(this.typeofAnimalRegisterSelected)
    if(this.actionSelect == 0) {
      
    } else if(this.actionSelect == 1) {
      
      const asig = localStorage.getItem("asig");
      
      const action = this.delteCageMovementForm.value.type;
      if (action > 0) {
        const body: UnsubscribeAnimalDTO = {
          weight: this.delteCageMovementForm.value.weight,
          age: this.delteCageMovementForm.value.age
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
        const amount = this.addCageMovementForm.value.animals_amount;

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

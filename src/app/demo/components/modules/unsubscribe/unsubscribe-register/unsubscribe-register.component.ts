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
  public animalMovementForm: FormGroup;

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

  ngOnInit(): void {
    this.animalMovementForm = this.formBuilder.group({
      weight: [0, Validators.required],
      age: [0, Validators.required],
      type: [0]
    });
  }

  registerMovement(): void {
    if(this.actionSelect == 0) {
      
    } else if(this.actionSelect == 1) {
      if (this.animalMovementForm.invalid) {
        this.animalMovementForm.markAllAsTouched
        return
      }
      console.log(this.cageSelect.id)
      
      const asig = localStorage.getItem("asig");
      const body: UnsubscribeAnimalDTO = {
        weight: this.animalMovementForm.value.weight,
        age: this.animalMovementForm.value.age
      }
      this.animalMovementService.unsubscribeAnimalPOST(body, parseInt(asig), this.cageSelect.id, this.animalMovementForm.value.type)
      .subscribe({
        next: data => {
          this.eventInCage.emit(data);
        },
        error: error => {
          console.error(error);
        }
      });
    }
  }
}

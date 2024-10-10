import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AnimalDTO } from 'src/app/interfaces/Request';
import { Animal } from 'src/app/interfaces/Response';
import { AnimalService } from 'src/app/service/api/animal.service';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html'
})
export class UpdateAnimalComponent implements OnInit{
  @Input({required: true}) animal?: Animal; 
  @Output() close = new EventEmitter();

  // injecciones
  private formBuilder = inject(FormBuilder);
  private animalService = inject(AnimalService);
  
  // variables globales
  public updateForm: FormGroup;

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      animal_name: [this.animal.animal_name, Validators.required],
      observations: [this.animal.observations],
      hability: [this.animal.hability]
    });
  }

  updateAnimal(): void {
    if(this.updateForm.invalid){
      this.updateForm.markAllAsTouched;
      return;
    }

    const body: AnimalDTO = this.updateForm.value;

    this.animalService.put(this.animal.id, body)
    .subscribe({
      next: (data) => {
        this.close.emit(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}

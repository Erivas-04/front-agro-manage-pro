import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AnimalDTO } from 'src/app/interfaces/Request';
import { AnimalService } from 'src/app/service/api/animal.service';

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html'
})
export class CreateAnimalComponent implements OnInit{
  @Output() close = new EventEmitter();

  // Injecciones
  private animalService = inject(AnimalService);
  private formBuilder = inject(FormBuilder);

  // Variables de uso
  public createAnimalForm: FormGroup;

  ngOnInit(): void {
    this.createAnimalForm = this.formBuilder.group({
      animal_name: ['', Validators.required],
      observations: [''],
      hability: [false]
    });
  }

  createAnimal(): void{

    if(this.createAnimalForm.invalid){
      this.createAnimalForm.markAllAsTouched;
      return
    }

    const asig = parseInt(localStorage.getItem("asig"));

    const body: AnimalDTO = {
      animal_name: this.createAnimalForm.value.animal_name,
      observations: this.createAnimalForm.value.observations,
      hability: this.createAnimalForm.value.hability
    };

    this.animalService.post(asig, body)
    .subscribe({
      next: (data) => {
        this.createAnimalForm = this.formBuilder.group({
          animal_name: ['', Validators.required],
          observations: [''],
          hability: false
        });
        this.close.emit(data);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}

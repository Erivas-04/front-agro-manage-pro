import { CreateCage, PutUser } from './../../../../../interfaces/Request';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Animal } from 'src/app/interfaces/Response';
import { AnimalService } from 'src/app/service/api/animal.service';
import { CagesService } from 'src/app/service/api/cages.service';
import { ConcentrateService } from 'src/app/service/api/concentrate.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-create-cage',
  templateUrl: './create-cage.component.html'
})
export class CreateCageComponent implements OnInit{
  @Output() close = new EventEmitter();

  // injecciones
  private cageService = inject(CagesService);
  private formBuilder = inject(FormBuilder);
  private animalService = inject(AnimalService);
  private concentrateService = inject(ConcentrateService);

  // variables a usar
  public cage: CreateCage = null;
  public createCageForm: FormGroup;
  public animalsHability: Animal[] = [];
  public animals: SelectItem[] = [];
  public concentrates: SelectItem[] = [];

  ngOnInit(): void {
    this.createCageForm = this.formBuilder.group({
      // datos para crear el corral
      code: ['', Validators.required],
      name: ['', Validators.required],
      active: [false],
      // datos para asignar un animal
      animalAsig: [''],
      animalAmount: [0],
      // datos par asignacion de concentrado
      concentrateAsig: [''],
      concentrateAmount: [0]
    });

    const asig = parseInt(localStorage.getItem("asig"));

    this.animalService.get(asig)
    .subscribe({
      next: (data) => {
        data.forEach((animal, index) => {
          if (animal.hability) {
            this.animals.push({label: animal.animal_name, value: animal.id});
          }
        });
      }, 
      error: (error) => {
        console.log(error);
      }
    });

    this.concentrateService.get(asig)
    .subscribe({
      next: (data) => {
        data.forEach((concentrate, index) => {
          if(concentrate.hability) {
            this.concentrates.push({label: concentrate.concentrate_name, value: concentrate.id})
          }
        })
      }
    })
  }

  createCage(): void {

    if(this.createCageForm.invalid) {
      this.createCageForm.markAllAsTouched;
      return
    };

    const asig = localStorage.getItem("asig");
    const body: CreateCage = {
      user: parseInt(asig),
      code: this.createCageForm.value.code,
      name: this.createCageForm.value.name,
      active: this.createCageForm.value.active
    }

    console.log(this.createCageForm.value)
    // this.cageService.post(body)
    // .subscribe({
    //   next: (data) => {
    //     this.close.emit();
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   }
    // });
  }

}

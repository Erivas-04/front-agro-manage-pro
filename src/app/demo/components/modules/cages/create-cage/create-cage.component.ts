import { AsigAnimal, CreateCage, PutUser } from './../../../../../interfaces/Request';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, SelectItem } from 'primeng/api';
import { Animal, Cage } from 'src/app/interfaces/Response';
import { AnimalService } from 'src/app/service/api/animal.service';
import { CageAsigsService } from 'src/app/service/api/cage-asigs.service';
import { CagesService } from 'src/app/service/api/cages.service';
import { ConcentrateService } from 'src/app/service/api/concentrate.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-create-cage',
  templateUrl: './create-cage.component.html'
})
export class CreateCageComponent implements OnInit{
  @Output() close = new EventEmitter();
  @Output() cageCreatedOutput = new EventEmitter();

  // injecciones
  private cageService = inject(CagesService);
  private formBuilder = inject(FormBuilder);

  // variables a usar
  public cage: CreateCage = null;
  public createCageForm: FormGroup;

  ngOnInit(): void {
    this.createCageForm = this.formBuilder.group({
      // datos para crear el corral
      code: ['', Validators.required],
      name: ['', Validators.required],
      observations: [''],
      active: [false]
    });
  }

  createCage(): void {

    if(this.createCageForm.invalid) {
      this.createCageForm.markAllAsTouched;
      return
    };

    const asig = localStorage.getItem("asig");
    const bodyCage: CreateCage = {
      user: parseInt(asig),
      code: this.createCageForm.value.code,
      name: this.createCageForm.value.name,
      observations: this.createCageForm.value.observations,
      hability: this.createCageForm.value.active
    }

    this.cageService.post(bodyCage)
    .subscribe({
      next: (data) => {
        this.cageService.getOne(data.id)
        .subscribe({
          next: (data) => {
            this.createCageForm = this.formBuilder.group({
              // datos para crear el corral
              code: ['', Validators.required],
              name: ['', Validators.required],
              observations: [''],
              active: [false]
            });
            this.cageCreatedOutput.emit(data);
          }
        })
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}

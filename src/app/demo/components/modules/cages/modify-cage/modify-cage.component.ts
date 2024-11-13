import { __values } from 'tslib';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { AsigAnimal, AsigAnimalFood, PutCage } from 'src/app/interfaces/Request';
import { Animal, Cage, Concentrate } from 'src/app/interfaces/Response';
import { AnimalService } from 'src/app/service/api/animal.service';
import { CageAsigsService } from 'src/app/service/api/cage-asigs.service';
import { CagesService } from 'src/app/service/api/cages.service';
import { ConcentrateService } from 'src/app/service/api/concentrate.service';

@Component({
  selector: 'app-modify-cage',
  templateUrl: './modify-cage.component.html'
})
export class ModifyCageComponent implements OnInit{
  @Input({required: true}) cage?: Cage;
  @Output() close = new EventEmitter();
  @Output() modify = new EventEmitter();

  //injecciones
  private formBuilder = inject(FormBuilder);
  private cageService = inject(CagesService);
  private cagesAsign = inject(CageAsigsService);
  
  private animalsSerivice = inject(AnimalService);
  private concentratesSerivce = inject(ConcentrateService);

  //publicas
  public updateCageForm: FormGroup;
  public asigAnimalForm: FormGroup; 
  public asigConcentrateForm: FormGroup;

  public animalsList: SelectItem[] = [];
  public concentrateList: SelectItem[] = [];

  // usadas para el tapMenu
  public actionSelect: number = 0;
  public items = [
    {label: 'Modificar corral', command: () => {
      this.actionSelect = 0;
    }},
    {label: 'Asignar animal', command: () => {
      this.actionSelect = 1;
    }},
    {label: 'Asignar concentrado', command: () => {
      this.actionSelect = 2;
    }}
  ]

  ngOnInit(): void {
    // Update cage form
    this.updateCageForm = this.formBuilder.group({
      code: [this.cage.code, Validators.required],
      name: [this.cage.name, Validators.required],
      active: [this.cage.active],
      observations: [this.cage.observations],
    });

    // asign animal form
    this.asigAnimalForm = this.formBuilder.group({
      animal: [this.cage.animalAsigned.animalId, Validators.required],
      animal_amount: [this.cage.animalAsigned.animalAmount, Validators.required]
    });

    // asig concentrate form
    this.asigConcentrateForm = this.formBuilder.group({
      animal_food: [this.cage.concentrateAsigned.concentrateId, Validators.required],
      animal_food_amount: [this.cage.concentrateAsigned.concentrateAmount, Validators.required]
    });

    const asig = localStorage.getItem("asig");

    this.animalsSerivice.get(parseInt(asig))
    .subscribe({
      next: data => {
        data.forEach((animal, index) => {
          if(animal.hability) {
            this.animalsList.push({ label: animal.animal_name, value: animal.id})
          }
        });
      }
    });

    this.concentratesSerivce.get(parseInt(asig))
    .subscribe({
      next: data => {
        data.forEach((concentrate, index) => {
          if(concentrate.hability){
            this.concentrateList.push({ label: concentrate.concentrate_name, value: concentrate.id});
          }
        });
      }
    });
  }

  saveUpdates(): void {
    if (this.actionSelect == 0){
      const updateCage: PutCage = this.updateCageForm.value;
      this.cageService.put(updateCage, this.cage.id)
      .subscribe({
        next: data => {
          this.modify.emit(data)
        },
        error: error => {
          console.error(error);
        }
      });
    }
    else if (this.actionSelect == 1 ) {
      const asigAnimal: AsigAnimal = this.asigAnimalForm.value;

      this.cagesAsign.asigAnimal(this.cage.id, asigAnimal)
      .subscribe({
        next: data => {
          this.modify.emit(data)
        },
        error: error => {
          console.error(error);
        }
      });
    }
    else if(this.actionSelect == 2) {
      const animal_food_request: AsigAnimalFood = this.asigConcentrateForm.value
      this.cagesAsign.asigConcentrate(this.cage.id, animal_food_request)
      .subscribe({
        next: data => {
          this.modify.emit(data);
        },
        error: error => {
          console.error(error);
        }
      })
    }
  }
}

import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConcentrateDTO } from 'src/app/interfaces/Request';
import { Concentrate } from 'src/app/interfaces/Response';
import { ConcentrateService } from 'src/app/service/api/concentrate.service';

@Component({
  selector: 'app-update-concentrate',
  templateUrl: './update-concentrate.component.html'
})
export class UpdateConcentrateComponent implements OnInit{
  @Input({required: true}) concentrate?: Concentrate;
  @Output() close = new EventEmitter();

  // injecciones
  private formBuilder = inject(FormBuilder);
  private concentrateService = inject(ConcentrateService);
  
  // globales
  public updateConcentrateForm: FormGroup;

  ngOnInit(): void {
    this.updateConcentrateForm = this.formBuilder.group({
      animal_food_name: [this.concentrate.concentrate_name, Validators.required],
      observations: [this.concentrate.observations],
      hability: [this.concentrate.hability, Validators.required]
    });
  }

  updateConcentrate(): void {
    if (this.updateConcentrateForm.invalid) {
      this.updateConcentrateForm.markAllAsTouched;
      return;
    }

    const body: ConcentrateDTO = {
      animal_food_name: this.updateConcentrateForm.value.animal_food_name,
      observations: this.updateConcentrateForm.value.observations,
      hability: this.updateConcentrateForm.value.hability
    };

    this.concentrateService.put(this.concentrate.id, body)
    .subscribe({
      next: (data) => {
        this.close.emit(data);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}

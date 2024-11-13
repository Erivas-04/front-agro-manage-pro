import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConcentrateDTO } from 'src/app/interfaces/Request';
import { ConcentrateService } from 'src/app/service/api/concentrate.service';

@Component({
  selector: 'app-create-concentrate',
  templateUrl: './create-concentrate.component.html'
})
export class CreateConcentrateComponent implements OnInit{
  @Output() close = new EventEmitter();

  // injecciones
  private formBuilder = inject(FormBuilder);
  private concentrateService = inject(ConcentrateService);

  // variables globales
  public createConcentrateForm: FormGroup;

  ngOnInit(): void {
    this.createConcentrateForm = this.formBuilder.group({
      animal_food_name: ['', Validators.required],
      observations: [''],
      hability: [false, Validators.required]
    });
  }

  createConcentrate(): void{
    if(this.createConcentrateForm.invalid) {
      this.createConcentrateForm.markAllAsTouched;
      return;
    }

    const asig = parseInt(localStorage.getItem("asig"));

    const body: ConcentrateDTO = this.createConcentrateForm.value;

    this.concentrateService.post(asig, body)
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

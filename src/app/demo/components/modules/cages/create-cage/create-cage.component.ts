import { CreateCage } from './../../../../../interfaces/Request';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CagesService } from 'src/app/service/api/cages.service';

@Component({
  selector: 'app-create-cage',
  templateUrl: './create-cage.component.html'
})
export class CreateCageComponent implements OnInit{
  @Output() close = new EventEmitter();

  // injecciones
  private cageService = inject(CagesService);
  private formBuilder = inject(FormBuilder);

  // variables a usar
  public cage: CreateCage = null;
  public createForm: FormGroup;
  public name: string;
  public code: string;
  public active: boolean;

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      active: [false]
    });
  }

  createCage(): void {

    if(this.createForm.invalid) {
      this.createForm.markAllAsTouched;
      return
    };

    const asig = localStorage.getItem("asig");
    const body: CreateCage = {
      user: parseInt(asig),
      code: this.createForm.value.code,
      name: this.createForm.value.name,
      active: this.createForm.value.active
    }

    this.cageService.post(body)
    .subscribe({
      next: (data) => {
        this.close.emit();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

}

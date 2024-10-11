import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.components.css'
})
export class CreateCompanyComponent implements OnInit{
  private formBuilder = inject(FormBuilder);

  public createCompanyForm: FormGroup;

  ngOnInit(): void {
    this.createCompanyForm = this.formBuilder.group({
      
    })
  }

}

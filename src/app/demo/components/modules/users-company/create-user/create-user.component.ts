import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyResponse } from './../../../../../interfaces/Response/company';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CreateUser } from 'src/app/interfaces/Request/user';
import { UsersCompanyService } from 'src/app/service/api/users-company.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit{
  @Input({required: true}) company?: CompanyResponse;
  @Output() goBack = new EventEmitter(); 

  private formbuilder = inject(FormBuilder);
  private messageService = inject(MessageService);
  private asignedApiService = inject(UsersCompanyService);

  public createForm: FormGroup;

  ngOnInit(): void {
    this.createForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      tel: [''],
      hability: [''],
      changePassword: [''],
      changePasswordNextSession: ['']
    })
  }

  saveUser(): void{

    if(this.createForm.invalid)return;

    const id = localStorage.getItem("asig");

    const body: CreateUser = {
      id_asig: Number(id),
      username: this.createForm.value.username,
      password: this.createForm.value.password,
      firstname: this.createForm.value.firstname,
      lastname: this.createForm.value.lastname,
      tel: this.createForm.value.tel,
      hability: this.createForm.value.hability,
      changePassword: this.createForm.value.changepassword,
      changePasswordNextSession: this.createForm.value.changePasswordNextSession
    }

    this.asignedApiService.post(body)
    .subscribe({
      next: (data) => {
        this.messageService.add({ key: 'create', severity: 'success', summary: 'Creacion de usuario', detail: data.message});
        this.goBack.emit();
      },
      error: (error) =>
        alert("algo salio malisimo")
    })
  }
}
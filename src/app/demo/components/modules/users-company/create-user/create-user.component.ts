import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyResponse } from './../../../../../interfaces/Response';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { CreateUser } from 'src/app/interfaces/Request';
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
  public roles: SelectItem[] = []

  ngOnInit(): void {
    this.createForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      role: [0, Validators.required],
      tel: [''],
      hability: [false],
      changePassword: [false],
      changePasswordNextSession: [false]
    });

    this.roles = [
      {label: 'Usuario', value: 0},
      {label: 'Administrador', value: 1}
    ]
  }

  saveUser(): void{

    if(this.createForm.invalid)return;

    const id = localStorage.getItem("asig");

    const body: CreateUser = {
      username: this.createForm.value.username + "@" + this.company.usernameExtension,
      password: this.createForm.value.password,
      name: this.createForm.value.firstname,
      last_name: this.createForm.value.lastname,
      tel: this.createForm.value.tel,
      role: this.createForm.value.role,
      observations: null,
      is_active: this.createForm.value.hability,
      changePassword: this.createForm.value.changepassword,
      changePasswordNextSession: this.createForm.value.changePasswordNextSession
    }

    this.asignedApiService.post(id, body)
    .subscribe({
      next: (data) => {
        this.messageService.add({ key: 'create', severity: 'success', summary: 'Creacion de usuario', detail: data.message});
        this.goBack.emit();
      },
      error: (error) =>{
        console.error(error.error)}
    })
  }
}

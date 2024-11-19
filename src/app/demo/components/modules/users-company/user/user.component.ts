import { UserService } from 'src/app/service/api/user.service';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/Response';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PutPassword, PutUser } from 'src/app/interfaces/Request';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [MessageService]
})
export class UserComponent implements OnInit{
  @Input({required: true}) user?: User;
  @Output() goBack = new EventEmitter();
  
  private formBuilder = inject(FormBuilder);
  private userApiService = inject(UserService);

  public putForm?: FormGroup;
  public changePassword?: FormGroup;

  public actUser: boolean = true;

  constructor(private messageService: MessageService){
  }

  ngOnInit(): void {
    
    const usernameParts = this.user.username.split("@");

    let username1 = usernameParts[0];
    let username2 = usernameParts[1];

    this.putForm = this.formBuilder.group({
      username: [username1, Validators.required],
      firstname: [this.user.firstname, Validators.required],
      lastname: [this.user.lastname, Validators.required],
      usernameExtension: [username2, Validators.required],
      tel: [this.user.tel],
      hability: [this.user.is_active],
      changePassword: [this.user.changePassword],
      changePasswordNextSession: [this.user.changePasswordNextSession]
    });

    this.changePassword = this.formBuilder.group({
      password: ['', Validators.required]
    });
  }

  items = [
    {label: 'Actualizar Usuairo',
      command: () => {
        this.actUser = true;
      }
    },
    {label: 'Actualizar Contrasena', 
      command: () => {
        this.actUser = false;
      }
    }
  ]

  putChangePassword(): void{
    if(this.changePassword.invalid)return;
    
    const body: PutPassword = {
      password: this.changePassword.value.password
    }

    this.userApiService.putPassword(body, this.user.id)
    .subscribe({
      next: (data) => {
        this.messageService.add({ key: 'success', severity: 'success', summary: 'Contraseña actualizada', detail: data.message})
      },
      error: (error) => {
        alert("Algo salio mal")
        console.log(error)
      }
    })
  }

  updateUser(): void{
    if(this.putForm.invalid)return;

    const body: PutUser = {
      username: this.putForm.value.username + "@" + this.putForm.value.usernameExtension,
      firstname: this.putForm.value.firstname,
      lastname: this.putForm.value.lastname,
      tel: this.putForm.value.tel,
      is_active: this.putForm.value.hability,
      observations: null,
      changePassword: this.putForm.value.changePassword,
      changePasswordNextSession: this.putForm.value.changePasswordNextSession
    }

    this.userApiService.put(body, this.user.id)
    .subscribe({
      next: (data) => {
        this.messageService.add({ key: 'success', severity: 'success', summary: 'Usuario actualizado', detail: data.message });
      },
      error: (error) => {
        alert("Algo salio mal perro")
      }
    })
  }

  
}

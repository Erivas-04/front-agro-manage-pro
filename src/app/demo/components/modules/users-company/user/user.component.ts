import { UserService } from 'src/app/service/api/user.service';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/Response/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PutUser } from 'src/app/interfaces/Request/user';
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

  public putForm: FormGroup;

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
      hability: [this.user.hability],
      changePassword: [this.user.changePassword],
      changePasswordNextSession: [this.user.changePasswordNextSession]
    })
  }

  items = [
    {label: 'Actualizar Usuairo'},
    {label: 'Actualizar Contrasena'}
  ]

  updateUser(): void{
    if(this.putForm.invalid)return;

    const body: PutUser = {
      username: this.putForm.value.username + "@" +this.putForm.value.usernameExtension,
      firstname: this.putForm.value.firstname,
      lastname: this.putForm.value.lastname,
      tel: this.putForm.value.tel,
      hability: this.putForm.value.hability,
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

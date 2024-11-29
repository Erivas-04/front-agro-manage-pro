import { Component, inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/api/login-api.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Login } from 'src/app/interfaces/Request';
import { UserService } from 'src/app/service/api/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    styleUrl: "./login.component.css"
})
export class LoginComponent{
    private loginService = inject(LoginService);
    private userApiService = inject(UserService);
    private router = inject(Router); 
    private _formBuilder = inject(FormBuilder);
    
    public displayDialog = false;
    public seePassword = false;

    inputValue: string = '';

    validUser: boolean = true;

    constructor(public layoutService: LayoutService) { }

    public formLogin = this._formBuilder.group({
        username_form: ['', Validators.required],
        password_form: ['', Validators.required]
    });

    changePasswordView(): void {
        this.seePassword = !this.seePassword;
    }


    iniciarSesion(): void {

        this.validUser = true;

        if(this.formLogin.invalid){
            this.formLogin.markAllAsTouched;
            return};
        
        const body: Login = {
            username: this.formLogin.value.username_form,
            password: this.formLogin.value.password_form
        }

        this.loginService.singIn(body).subscribe({
            next:(data) => {
                if(data.token != null){
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("asig", data.asig.toString());

                    this.userApiService.get(data.asig.toString())
                    .subscribe({
                        next: user=>{ 
                            if(!user.is_active){
                                this.displayDialog = true;
                                return
                            }
                            this.router.navigate(["inicio"]);
                        },
                        error: error => {
                            console.error(error.error)
                        }
                    })

                }else{
                    this.displayDialog = true;
                    this.formLogin.markAllAsTouched;

                }
            },
            error:(error) => {
                this.displayDialog = true
                // colcar un alert pop para las credenciales incorrectas
            }
        })
    }
}

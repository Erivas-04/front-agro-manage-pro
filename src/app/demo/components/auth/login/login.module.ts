import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/service/api/login-api.service';
import { DialogModule } from 'primeng/dialog';
import { ErrorComponent } from '../error/error.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        ReactiveFormsModule,
        HttpClientModule,
        DialogModule
    ],
    declarations: [LoginComponent, ErrorComponent],
    providers: [LoginService]
})
export class LoginModule { }

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ChangePasswordRoutingModule } from "./change-password-routing.module";
import { ChangePasswordComponent } from "./change-password.component";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { PasswordModule } from "primeng/password";

@NgModule({
    imports: [
        CommonModule,
        ChangePasswordRoutingModule, 
        ButtonModule, 
        InputTextModule,
        FormsModule,
        PasswordModule
    ],
    declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule {}
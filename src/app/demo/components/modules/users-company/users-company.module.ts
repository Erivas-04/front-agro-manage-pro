import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UsersCompanyRoutingModule } from "./users-company-routing.module";
import { UsersCompanyComponent } from "./users-company.component";
import { TableModule } from 'primeng/table';
import { ButtonModule } from "primeng/button";
import { UserComponent } from "./user/user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";
import { MessageModule } from 'primeng/message';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { CreateUserComponent } from "./create-user/create-user.component";
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from "primeng/dropdown";

@NgModule ({
    imports: [
        CommonModule,
        ButtonModule,
        UsersCompanyRoutingModule,
        TableModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        InputTextareaModule,
        CheckboxModule,
        MessageModule,
        MessagesModule,
        ToastModule,
        RippleModule,
        ToggleButtonModule,
        DropdownModule,
        TabMenuModule
    ],
    declarations: [UsersCompanyComponent, UserComponent, CreateUserComponent]
})
export class UsersCompanyModule {}
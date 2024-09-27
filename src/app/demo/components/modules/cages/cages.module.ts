import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CagesRoutingModule } from "./cages-routing.module";
import { CagesComponent } from "./cages.component";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { CreateCageComponent } from "./create-cage/create-cage.component";
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RippleModule } from 'primeng/ripple';

@NgModule({
    imports: [
        CommonModule,
        CagesRoutingModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        CalendarModule,
        DropdownModule,
        TableModule,
        DialogModule,
        ButtonModule,
        MenuModule,
        ToastModule,
        RippleModule
    ],
    declarations: [CagesComponent, CreateCageComponent]
})
export class CagesModules {}
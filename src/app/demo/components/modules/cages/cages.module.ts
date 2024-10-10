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
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { ModifyCageComponent } from "./modify-cage/modify-cage.component";
import { TabMenuModule } from 'primeng/tabmenu';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';
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
        RippleModule,
        PanelMenuModule,
        StyleClassModule,
        TabMenuModule,
        InputSwitchModule,
        InputNumberModule
    ],
    declarations: [CagesComponent, CreateCageComponent, ModifyCageComponent]
})
export class CagesModules {}
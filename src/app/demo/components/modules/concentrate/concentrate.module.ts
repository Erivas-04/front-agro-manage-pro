import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ConcentrateRoutingModule } from "./concentrate-routing.module";
import { ConcentrateComponent } from "./concentrate.component";
import { TableModule } from "primeng/table";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from "primeng/button";
import { CreateConcentrateComponent } from "./create-concentrate/create-concentrate.component";
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from 'primeng/toast';
import { UpdateConcentrateComponent } from "./update-concentrate/update-concentrate.component";

@NgModule({
    imports: [
        CommonModule,
        ConcentrateRoutingModule,
        TableModule,
        DialogModule,
        ButtonModule,
        InputSwitchModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ToastModule
    ],
    declarations: [ConcentrateComponent, CreateConcentrateComponent, UpdateConcentrateComponent]
})
export class ConcentrateModule {    }
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CagesRoutingModule } from "./cages-routing.module";
import { CagesComponent } from "./cages.component";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";

@NgModule({
    imports: [
        CommonModule,
        CagesRoutingModule,
        InputTextModule,
        CalendarModule,
        DropdownModule,
        ButtonModule
    ],
    declarations: [CagesComponent]
})
export class CagesModules {}
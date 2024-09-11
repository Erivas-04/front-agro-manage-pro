import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CagesRoutingModule } from "./cages-routing.module";
import { CagesComponent } from "./cages.component";

@NgModule({
    imports: [
        CommonModule,
        CagesRoutingModule
    ],
    declarations: [CagesComponent]
})
export class CagesModules {}
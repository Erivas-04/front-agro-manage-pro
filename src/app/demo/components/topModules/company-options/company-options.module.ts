import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CompanyOptionsRoutingModule } from "./company-options-routing.module";

@NgModule({
    imports: [
        CommonModule, 
        CompanyOptionsRoutingModule
    ]
})
export class CompanyOptionsModule {}
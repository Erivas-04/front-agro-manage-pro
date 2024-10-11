import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CreateCompanyRoutingModule } from "./create-company-routing.module";
import { CreateCompanyComponent } from "./create-company.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        CreateCompanyRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [CreateCompanyComponent]
})
export class CreateCompanyModule{}
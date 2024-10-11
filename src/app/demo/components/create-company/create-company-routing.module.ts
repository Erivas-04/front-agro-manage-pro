import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateCompanyComponent } from "./create-company.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CreateCompanyComponent }
    ])],
    exports: [RouterModule]
})
export class CreateCompanyRoutingModule {}
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersCompanyComponent } from "./users-company.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UsersCompanyComponent }
    ])],
    exports: [RouterModule]
})
export class UsersCompanyRoutingModule {}
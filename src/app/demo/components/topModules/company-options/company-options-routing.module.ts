import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'usuarios', loadChildren: ()=> import('../../modules/users-company/users-company.module').then(m=>m.UsersCompanyModule)},
    ])],
    exports: [RouterModule]
})
export class CompanyOptionsRoutingModule {}
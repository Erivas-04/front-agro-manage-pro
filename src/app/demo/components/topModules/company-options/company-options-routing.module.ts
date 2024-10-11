import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'configuraciones', loadChildren: ()=> import('../../modules/configurations/configurations.module').then(m=> m.ConfigurationModule)},
        { path: 'usuarios', loadChildren: ()=> import('../../modules/users-company/users-company.module').then(m=>m.UsersCompanyModule)},
    ])],
    exports: [RouterModule]
})
export class CompanyOptionsRoutingModule {}
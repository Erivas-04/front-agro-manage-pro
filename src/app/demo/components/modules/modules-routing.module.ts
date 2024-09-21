import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'inicio', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
        { path: 'corrales', loadChildren: () => import('./cages/cages.module').then(m => m.CagesModules)},
        { path: 'animales', loadChildren: () => import('./animals/animals.module').then(m => m.AnimalsModule)},
        { path: 'movimientos', loadChildren: () => import('./movement/movement.module').then(m => m.MovementModule)},
        { path: 'configuraciones', loadChildren: () => import('./configurations/configurations.module').then(m => m.ConfigurationModule)}, 
        { path: 'usuarios', loadChildren: () => import('./users-company/users-company.module').then(m => m.UsersCompanyModule)},
        { path: '**', redirectTo: '/notfound'}
    ])],
    exports: [RouterModule]
})
export class ModulesRoutingModule {}
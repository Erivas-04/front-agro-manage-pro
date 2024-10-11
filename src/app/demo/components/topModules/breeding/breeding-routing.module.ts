import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'corrales', loadChildren: ()=> import('../../modules/cages/cages.module').then(m => m.CagesModules)},
        { path: 'animales', loadChildren: ()=> import('../../modules/animals/animals.module').then(m => m.AnimalsModule)},
        { path: 'concentrados', loadChildren: ()=> import('../../modules/concentrate/concentrate.module').then(m=> m.ConcentrateModule)},
    ])],
    exports: [RouterModule]
})
export class BreedingRoutingModule {}
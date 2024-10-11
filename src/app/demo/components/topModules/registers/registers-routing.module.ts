import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'movimientos', loadChildren: ()=> import('../../modules/movement/movement.module').then(m => m.MovementModule)},
    ])],
    exports: [RouterModule]
})
export class RegistersRoutingModule {}
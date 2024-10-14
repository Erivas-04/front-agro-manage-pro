import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'movimientoslista', loadChildren: ()=> import('../../modules/movement/movement.module').then(m => m.MovementModule)},
        { path: 'registrar', loadChildren: () => import('../../modules/unsubscribe/unsubscribe.module').then(m => m.UnsubscribeModule)},
        { path: 'traslados', loadChildren: () => import('../../modules/move/move.module').then(m => m.MoveModule)}
    ])],
    exports: [RouterModule]
})
export class RegistersRoutingModule {}
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'movimientoslista', loadChildren: ()=> import('../../modules/movement/movement.module').then(m => m.MovementModule)},
        { path: 'registrar', loadChildren: () => import('../../modules/unsubscribe/unsubscribe.module').then(m => m.UnsubscribeModule)},
    ])],
    exports: [RouterModule]
})
export class RegistersRoutingModule {}
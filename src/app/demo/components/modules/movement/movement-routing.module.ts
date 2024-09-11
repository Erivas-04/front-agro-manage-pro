import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MovementComponent } from "./movement.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MovementComponent}
    ])],
    exports: [RouterModule]
})
export class MovementRoutingModule {}
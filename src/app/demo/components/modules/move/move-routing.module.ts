import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MoveComponent } from "./move.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MoveComponent}
    ])],
    exports: [RouterModule]
})
export class MoveRoutingModule {}
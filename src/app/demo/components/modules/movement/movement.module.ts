import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MovementRoutingModule } from "./movement-routing.module";
import { MovementComponent } from "./movement.component";

@NgModule({
    imports: [
        CommonModule,
        MovementRoutingModule
    ],
    declarations: [MovementComponent]
})
export class MovementModule {}
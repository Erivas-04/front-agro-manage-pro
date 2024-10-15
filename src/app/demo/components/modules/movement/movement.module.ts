import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MovementRoutingModule } from "./movement-routing.module";
import { MovementComponent } from "./movement.component";
import { TableModule } from "primeng/table";
import { DialogMovementComponent } from "./dialog-movement/dialog-movement.component";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
    imports: [
        CommonModule,
        MovementRoutingModule,
        TableModule,
        DialogModule,
        InputTextModule

    ],
    declarations: [MovementComponent, DialogMovementComponent]
})
export class MovementModule {}
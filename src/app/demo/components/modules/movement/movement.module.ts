import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MovementRoutingModule } from "./movement-routing.module";
import { MovementComponent } from "./movement.component";
import { TableModule } from "primeng/table";

@NgModule({
    imports: [
        CommonModule,
        MovementRoutingModule,
        TableModule
    ],
    declarations: [MovementComponent]
})
export class MovementModule {}
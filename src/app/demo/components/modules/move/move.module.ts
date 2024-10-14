import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MoveRoutingModule } from "./move-routing.module";
import { MoveComponent } from "./move.component";

@NgModule({
    imports: [
        CommonModule,
        MoveRoutingModule
    ],
    declarations: [MoveComponent]
})
export class MoveModule {}
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AnimalsComponent } from "./animals.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: AnimalsComponent}
    ])],
    exports: [RouterModule]
})
export class AnimalsRoutingModule {}
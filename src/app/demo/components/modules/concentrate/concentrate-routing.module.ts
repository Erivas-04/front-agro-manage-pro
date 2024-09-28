import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ConcentrateComponent } from "./concentrate.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ConcentrateComponent}
    ])],
    exports: [RouterModule]
})
export class ConcentrateRoutingModule {  }
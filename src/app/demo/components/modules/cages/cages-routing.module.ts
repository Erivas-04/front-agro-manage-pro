import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CagesComponent } from "./cages.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CagesComponent }
    ])],
    exports: [RouterModule]
})
export class CagesRoutingModule {}
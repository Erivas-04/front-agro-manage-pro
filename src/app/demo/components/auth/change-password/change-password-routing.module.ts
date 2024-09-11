import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChangePasswordComponent } from "./change-password.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ChangePasswordComponent}
    ])],
    exports: [RouterModule]
})
export class ChangePasswordRoutingModule {}
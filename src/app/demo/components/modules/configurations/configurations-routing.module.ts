import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ConfigurationsComponent } from "./configurations.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ConfigurationsComponent}
    ])],
    exports: [RouterModule]
})
export class ConfigurationRoutingModule {}
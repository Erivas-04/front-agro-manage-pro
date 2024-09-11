import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ConfigurationRoutingModule } from "./configurations-routing.module";
import { ConfigurationsComponent } from "./configurations.component";

@NgModule({
    imports: [
        CommonModule,
        ConfigurationRoutingModule
    ],
    declarations: [ConfigurationsComponent]
})
export class ConfigurationModule {}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UnsubscribeRoutingModule } from "./unsubscribe-routing.module";
import { UnsubscribeComponent } from "./unsubscribe.component";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { UnsubscribeRegisterComponent } from "./unsubscribe-register/unsubscribe-register.component";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { MenuModule } from "primeng/menu";
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
        CommonModule,
        UnsubscribeRoutingModule,
        TableModule,
        DialogModule,
        ButtonModule,
        RippleModule,
        TabMenuModule,
        PanelMenuModule,
        FormsModule,
        ReactiveFormsModule,
        InputNumberModule,
        InputTextModule,
        DropdownModule,
        ToastModule,
        MenuModule
    ],
    declarations: [UnsubscribeComponent, UnsubscribeRegisterComponent]
})
export class UnsubscribeModule {}
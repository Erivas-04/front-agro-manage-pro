import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AnimalsRoutingModule } from "./animals-routing.module";
import { AnimalsComponent } from "./animals.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { DialogModule } from 'primeng/dialog';
import { CreateAnimalComponent } from "./create-animal/create-animal.component";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputMaskModule } from "primeng/inputmask";
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { UpdateAnimalComponent } from "./update-animal/update-animal.component";
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
    imports: [
    CommonModule,
    AnimalsRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    InputMaskModule,
    CheckboxModule,
    InputSwitchModule
],
    declarations: [AnimalsComponent, CreateAnimalComponent, UpdateAnimalComponent]
})
export class AnimalsModule {}
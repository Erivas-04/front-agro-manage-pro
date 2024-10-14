import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Animal, Message } from 'src/app/interfaces/Response';
import { AnimalService } from 'src/app/service/api/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.css',
  providers: [MessageService]
})
export class AnimalsComponent implements OnInit{
  // injecciones necesarias
  private animalService = inject(AnimalService);
  private messageService = inject(MessageService);
  
  // Variables publicas para plantilla
  public animalList: Animal[] = [];
  public animalSelect: Animal = null;
  public displayU: boolean = false;
  public display: boolean = false;

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const asig = parseInt(localStorage.getItem("asig"));

    this.animalService.get(asig)
    .subscribe({
      next: (data) => {
        this.animalList = data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  updateAnimal(animal: Animal): void {
    this.animalSelect = animal;
    this.displayU = true;
  }

  closeDialog(data?: Message): void {
    if (data != null){
      if( this.display) {
        this.messageService.add({key: 'create', severity: 'success', summary: 'Animal creado', detail: data.message})
      }
      else {
        this.messageService.add({key: 'update', severity: 'success', summary: 'Animal actualizado', detail: data.message})
      }
    }
    this.display = false;
    this.displayU = false;
    this.animalSelect = null;
    this.getData();
  }
}

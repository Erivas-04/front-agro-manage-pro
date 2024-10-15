import { AnimalService } from './../../../../service/api/animal.service';
import { MessageService, SelectItem } from 'primeng/api';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cage, Message } from 'src/app/interfaces/Response';
import { CagesService } from 'src/app/service/api/cages.service';

@Component({
  selector: 'app-cages',
  templateUrl: './cages.component.html',
  providers: [MessageService]
})
export class CagesComponent implements OnInit {
  // importacion e injecciones de servicios
  private cageService = inject(CagesService);
  private animalService = inject(AnimalService);
  private router = inject(Router);
  private messageService = inject(MessageService);
  
  // creacion de variables globales
  public display: boolean = false;
  public createCage: boolean = false;
  public show: boolean = false;
  public modifi: boolean = false;
  public cagesList: Cage[] = [];
  public animals: SelectItem[] = [];
  public cageSelect: Cage = null;

  ngOnInit(): void {
    const asig = localStorage.getItem("asig");
    this.getData(asig);

    this.animalService.get(parseInt(asig))
    .subscribe({
      next: (data) => {
        data.forEach((animal, index) => {
          if(animal.hability) {
            this.animals.push({label: animal.animal_name, value: animal.id})
          }
        })
      }
    });
  }

  getData(asig): void {

    this.cageService.get(parseInt(asig))
    .subscribe({
      next: (data) => {
        this.cagesList = data;
      },
      error: (error) => {
        console.error(error);
        this.router.navigate(['/login'])
      }
    })
  }

  cageModified(message: Message){
    this.messageService.add({ key: "modify", severity: 'info', summary: 'Corral actualizado', detail: message.message})
  }

  modifyCage(cage: Cage): void {
    if(this.display) {
      this.messageService.add({ key: 'create', severity: 'success', summary: 'Corral creado', detail: 'Corral creado correctamente'})
    }
    this.cageSelect = cage;
    this.display = false;
    this.modifi = true;
  }

  closeCreation(): void {
    const asig = localStorage.getItem("asig");
    this.getData(asig);
    this.display = false;
    this.createCage = false;
    this.show = false;
    this.modifi = false;
    this.cageSelect = null;
  }

  SearchCage(): void {
    console.log("");
  }
}

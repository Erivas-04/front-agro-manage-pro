import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Cage, Message } from 'src/app/interfaces/Response';
import { CagesService } from 'src/app/service/api/cages.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  providers: [MessageService]
})
export class UnsubscribeComponent implements OnInit{
  // inyecciones
  private cageService = inject(CagesService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  // variables 
  public cagesList: Cage[] = [];
  public unsubscribe: boolean = false;
  public cageSelect: Cage = null;
 

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    const asig = localStorage.getItem("asig")

    this.cageService.get(parseInt(asig))
    .subscribe({
      next: data => {
        this.cagesList = data;
      },
      error: error => {
        console.error(error);
        this.router.navigate(["/login"])
      }
    })
  }

  unsubscribeCage(cage: Cage): void {
    if (cage.animalAsigned.animalId == 0 || !cage.active || cage.concentrateAsigned.concentrateId == 0){
      this.messageService.add({ key: 'error', severity: 'error', summary: "Movimiento Prohibido", detail: "Este corral no tiene todas sus caracteristicas para realizar movimientos"})
      return;
    }
    this.cageSelect = cage;
    this.unsubscribe = true;
  }

  setMessageEvent(message: Message): void {
    this.messageService.add({ key: "modify", severity: "success", summary: "Movimiento registrado", detail: message.message})
  }

  invalidMovementInCage(message: Message): void {
    this.messageService.add({ key: 'invalid', severity: 'warn', summary: 'Movimiento Invalido', detail: message.message})
  }

  closeDialog(): void {
    this.getData();
    this.unsubscribe = false;
    this.cageSelect = null;
  }
}

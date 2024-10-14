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
    this.cagesList = [];
    const asig = localStorage.getItem("asig")

    this.cageService.get(parseInt(asig))
    .subscribe({
      next: data => {
        data.forEach((cage, index) => {
          if(cage.active){
            this.cagesList.push(cage);
          }
        })
      },
      error: error => {
        console.error(error);
        this.router.navigate(["/login"])
      }
    })
  }

  unsubscribeCage(cage: Cage): void {
    this.cageSelect = cage;
    this.unsubscribe = true;
  }

  setMessageEvent(message: Message): void {
    this.messageService.add({ key: "modify", severity: "success", summary: "Movimiento registrado", detail: message.message})
  }

  closeDialog(): void {
    this.getData();
    this.unsubscribe = false;
    this.cageSelect = null;
  }
}

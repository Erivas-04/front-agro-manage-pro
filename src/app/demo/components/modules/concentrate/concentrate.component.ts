import { style } from '@angular/animations';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Concentrate, Message } from 'src/app/interfaces/Response';
import { ConcentrateService } from 'src/app/service/api/concentrate.service';

@Component({
  selector: 'app-concentrate',
  templateUrl: './concentrate.component.html',
  styleUrl: './concentrate.component.css',
  providers: [MessageService]
})
export class ConcentrateComponent implements OnInit{
  // injecciones
  private concentrateService = inject(ConcentrateService);
  private router = inject(Router);
  private messageService = inject(MessageService);
  
  // variables
  public concentrateList: Concentrate[] = [];
  public concentrateSelect: Concentrate = null;
  public display: boolean = false;
  public displayU: boolean = false;

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const asig = parseInt(localStorage.getItem("asig"))

    this.concentrateService.get(asig)
    .subscribe({
      next: (data) => {
        this.concentrateList = data;
      },
      error: (error) => {
        console.error(error);
        this.router.navigate(['/login']);
      }
    })
  }

  updateDialog(data: Concentrate){
    this.concentrateSelect = data;
    this.displayU = true;
  }

  closeDialog(data?: Message){
    if(this.display){
      this.messageService.add({ key: 'create', severity: 'success', summary: 'Concentrado creado', detail: data.message})
    }
    else {
      this.messageService.add({ key: 'update', severity: 'info', summary: 'Concentrado actualizado', detail: data.message})
      
    }

    this.concentrateSelect = null;
    this.display = false;
    this.displayU = false;
    this.getData();
  }
}

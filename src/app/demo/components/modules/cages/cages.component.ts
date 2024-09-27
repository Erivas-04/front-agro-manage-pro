import { MessageService } from 'primeng/api';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cage, Message } from 'src/app/interfaces/Response';
import { CagesService } from 'src/app/service/api/cages.service';

@Component({
  selector: 'app-cages',
  templateUrl: './cages.component.html'
})
export class CagesComponent implements OnInit {
  // importacion e injecciones de servicios
  private cageService = inject(CagesService);
  private router = inject(Router);
  
  // creacion de variables globales
  public cagesList: Cage[] = [];
  public display: boolean = false;
  public createCage: boolean = false;
  public show: boolean = false;

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const asig = localStorage.getItem("asig");

    this.cageService.get(parseInt(asig))
    .subscribe({
      next: (data) => {
        this.cagesList = data;
      },
      error: (error) => {
        console.error(error);
        this.router.navigate(['auth/login'])
      }
    })
  }

  closeCreation(): void {
    window.location.reload();
  }

  SearchCage(): void {
    console.log("");
  }
}

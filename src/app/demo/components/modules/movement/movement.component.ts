import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovementCageView } from 'src/app/interfaces/Response';
import { ReportsApiService } from 'src/app/service/api/reports-api.service';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html'
})
export class MovementComponent implements OnInit{
  // injecciones 
  private animalMovementService = inject(ReportsApiService);
  private router = inject(Router);

  // variables globales
  public movements: MovementCageView[] = [];
  public showDialog: boolean = false;
  public detail: MovementCageView = null;


  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const asig = localStorage.getItem("asig")
    this.animalMovementService.get(parseInt(asig))
    .subscribe({
      next: data => {
        this.movements = data;
      },
      error: error => {
        console.error(error);
        this.router.navigate(["/login"])
      }
    });
  }

  showDetail(movementCageView: MovementCageView): void {
    this.detail = movementCageView;
    this.showDialog = true;
  }

}

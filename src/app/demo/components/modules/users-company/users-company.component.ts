import { User } from 'src/app/interfaces/Response';
import { UsersCompanyService } from '../../../../service/api/users-company.service';
import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CompanyResponse } from 'src/app/interfaces/Response';
import { CompanyService } from 'src/app/service/api/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-company',
  templateUrl: './users-company.component.html',
  providers: [MessageService]
})
export class UsersCompanyComponent implements OnInit{
  private usersCompanyService = inject(UsersCompanyService);
  private companyApiService = inject(CompanyService);
  private router = inject(Router);
  public userSelected?: User = null;
  public company?: CompanyResponse = null;
  public usersList: User[] = [];

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const id = localStorage.getItem("asig");

    this.usersCompanyService.get(id)
    .subscribe({
      next: (data)=>{
        this.usersList = data;
      },
      error: (error) => {
        this.router.navigate(['/login'])
      } 
    });
  }

  constructor() {
    
  }

  // funcionamiento de boton de opciones en el usuario
  cargarUsuario(user: User): void {
    this.userSelected = user;
  }

  CreateUser(): void {
    const asig = localStorage.getItem("asig");

    this.companyApiService.get(asig)
    .subscribe({
      next: (data) => {
        this.company = data;
      }
    })
  }

  Back(): void {
    this.getData();
    this.userSelected = null;
    this.company = null;
  }
}

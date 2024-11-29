import { CompanyResponse } from './../interfaces/Response';
import { Component, ElementRef, ViewChild, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { CompanyService } from '../service/api/company.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit{

    private companySerice = inject(CompanyService);
    private router = inject(Router);
    public company: CompanyResponse;

    options: MenuItem[] = [];

    color = null;

    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }
    get theme(): string {
        return this.layoutService.config().theme;
    }

    set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }
    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    changeTheme(theme: string, colorScheme: string) {
        this.theme = theme;
        this.color = colorScheme;
        this.colorScheme = colorScheme;
    }

    loading = [false, false, false, false];

    ngOnInit() {
        const asig = localStorage.getItem("asig")

        this.companySerice.get(asig)
        .subscribe({
            next:(data) => {
                if(data.hability){
                    this.company = data
                }
            },
            error: (error) => {
                this.router.navigate(['/login']);
            }
        })

        this.theme = "bootstrap4-light-blue";
        this.colorScheme = "light";
        this.color = "light"
        this.options = [
            { label: 'Salir', icon: 'pi pi-fw pi-sign-out', routerLink: ['/login'], command: () =>{
                localStorage.setItem("token", null);
                localStorage.setItem("asig", null);
            } },
            { label: 'Cambiar Contraseña', icon: 'pi pi-fw pi-key', routerLink: ['/auth/changepassword'] }
        ];
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => this.loading[index] = false, 1000);
    }

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { 
        this.company = {
            id: 0,
            hability: true,
            company_name: "",
            usernameExtension: "",
            address: "", 
            nit: "",
            owner: "",
            tel: "",
            observations: "",
            department: "",
            state: ""
        };
    }
}

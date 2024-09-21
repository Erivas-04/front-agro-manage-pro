import { CompanyResponse } from './../interfaces/Response/company';
import { Component, ElementRef, ViewChild, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { CompanyService } from '../service/api/company.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit{

    private companySerice = inject(CompanyService);
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
            }
        })

        this.theme = "bootstrap4-dark-blue";
        this.colorScheme = "dark";
        this.color = "dark"
        this.options = [
            { label: 'Salir', icon: 'pi pi-fw pi-sign-out', routerLink: ['/auth/login'], command: () =>{
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

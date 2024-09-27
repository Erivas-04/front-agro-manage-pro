import { OnInit, inject } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    
    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Modulos',
                items: [
                    { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/modulos/inicio']},
                    { label: 'Corrales', icon: 'pi pi-fw pi-box', routerLink: ['/modulos/corrales']},
                    { label: 'Crianza', icon: 'pi pi-fw pi-twitter', routerLink: ['/modulos/animales']},
                    { label: 'Movimientos', icon: 'pi pi-fw pi-book', routerLink: ['/modulos/movimientos']},
                    { label: 'Configuraciones', icon: 'pi pi-fw pi-th-large', routerLink: ['/modulos/configuraciones']},
                    { label: 'Usuarios', icon:'pi pi-fw pi-users', routerLink: ['/modulos/usuarios'] }
                ]
            }
        ];
    }
}

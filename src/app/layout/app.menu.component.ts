import { OnInit, inject } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { UserService } from '../service/api/user.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
    private userService = inject(UserService);
    
    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        const asig = localStorage.getItem("asig")
        this.userService.get(asig)
        .subscribe({
            next: data => {
                if (data.role == "USER"){
                    this.model = [
                        {
                            label: 'Modulos',
                            items: [
                                { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/modulos/inicio']},

                                { label: 'Movimientos', icon: 'pi pi-fw pi-calendar-plus' ,items: [
                                    { label: 'Dar de baja', icon: 'pi pi-fw pi-list'},
                                    { label: 'Traslados', icon: 'pi pi-fw pi-truck'},
                                    { label: 'Registros', icon: 'pi pi-fw pi-book', routerLink: ['/modulos/movimientos']},
                                    ]
                                },
                            ]
                        }
                    ];
                }
                else {
                    this.model = [
                        {
                            label: 'Modulos',
                            items: [
                                { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/modulos/inicio']},
            
                                { label: 'Crianza', icon: 'pi pi-fw pi-bookmark', items: 
                                    [{ label: 'Corrales', icon: 'pi pi-fw pi-box', routerLink: ['/modulos/corrales']},
                                    { label: 'Crianza', icon: 'pi pi-fw pi-twitter', routerLink: ['/modulos/animales']},
                                    { label: 'Concentrados', icon: 'pi pi-fw pi-filter', routerLink: ['/modulos/concentrados']},]    
                                },
            
                                { label: 'Movimientos', icon: 'pi pi-fw pi-calendar-plus' ,items: [
                                    { label: 'Dar de baja', icon: 'pi pi-fw pi-list'},
                                    { label: 'Traslados', icon: 'pi pi-fw pi-truck'},
                                    { label: 'Registros', icon: 'pi pi-fw pi-book', routerLink: ['/modulos/movimientos']},
                                    ]
                                },
            
                                { label: 'Empresa', icon: 'pi pi-fw pi-building' ,items: 
                                    [
                                        { label: 'Configuraciones', icon: 'pi pi-fw pi-th-large', routerLink: ['/modulos/configuraciones']},
                                        { label: 'Usuarios', icon:'pi pi-fw pi-users', routerLink: ['/modulos/usuarios'] },
                                    ]
                                }
                            ]
                        }
                    ];
                }
            }
        })

        
    }
}

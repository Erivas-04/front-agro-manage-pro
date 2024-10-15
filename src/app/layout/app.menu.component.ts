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
                                { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/inicio']},

                                { label: 'Movimientos', icon: 'pi pi-fw pi-calendar-plus' ,items: [
                                    { label: 'Dar de baja', icon: 'pi pi-fw pi-list', routerLink: ['/movimientos/registrar']},
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
                                { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/inicio']},
            
                                { label: 'Crianza', icon: 'pi pi-fw pi-bookmark', items: 
                                    [{ label: 'Corrales', icon: 'pi pi-fw pi-box', routerLink: ['/crianza/corrales']},
                                    { label: 'Crianza', icon: 'pi pi-fw pi-twitter', routerLink: ['/crianza/animales']},
                                    { label: 'Concentrados', icon: 'pi pi-fw pi-filter', routerLink: ['/crianza/concentrados']},]    
                                },
            
                                { label: 'Movimientos', icon: 'pi pi-fw pi-calendar-plus' ,items: [
                                    { label: 'Acciones', icon: 'pi pi-fw pi-list', routerLink: ['/movimientos/registrar']},
                                    { label: 'Registros', icon: 'pi pi-fw pi-book', routerLink: ['/movimientos/movimientoslista']},
                                    ]
                                },
            
                                { label: 'Empresa', icon: 'pi pi-fw pi-building' ,items: 
                                    [
                                        { label: 'Usuarios', icon:'pi pi-fw pi-users', routerLink: ['/empresa/usuarios'] },
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

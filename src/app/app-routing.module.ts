import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { authGuard } from './custom/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'inicio', loadChildren: () => import('./demo/components/modules/home/home.module').then(m => m.HomeModule), canActivate:[authGuard]},
                    { path: 'crianza', loadChildren: () => import('./demo/components/topModules/breeding/breeding.module').then(m=>m.BreedingModule), canActivate:[authGuard]},
                    { path: 'empresa', loadChildren: ()=> import('./demo/components/topModules/company-options/company-options.module').then(m=> m.CompanyOptionsModule), canActivate:[authGuard]},
                    { path: 'movimientos', loadChildren: () => import('./demo/components/topModules/registers/registers.module').then(m=>m.RegistersModule), canActivate:[authGuard]},
                ]
            },
            { path: 'ingresar', loadChildren: () => import('./demo/components/create-company/create-company.module').then(m => m.CreateCompanyModule)},
            { path: 'login', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },

        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

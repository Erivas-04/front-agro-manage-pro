import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        // { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
        { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: 'changepassword', loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule)},
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }

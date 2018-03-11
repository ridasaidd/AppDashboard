import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { SharedModule } from './../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        NgbAlertModule.forRoot()
    ],
    declarations: [LoginComponent],
    providers: []
})
export class LoginModule {}

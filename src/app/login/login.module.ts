import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { SharedModule } from './../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
    ],
    declarations: [LoginComponent],
    providers: []
})
export class LoginModule {}

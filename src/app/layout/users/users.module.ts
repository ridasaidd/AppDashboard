import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CreateModule } from './create/create.module';

import { SharedModule } from './../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule,
        SharedModule,
        CreateModule
    ],
    declarations: [UsersComponent],
    exports: []
})
export class UsersModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateComponent } from './create.component';

import { SharedModule } from './../../../shared/shared.module';

import { CreateForm } from './createForm';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    SharedModule
  ],
  declarations: [CreateComponent],
})
export class CreateModule { }

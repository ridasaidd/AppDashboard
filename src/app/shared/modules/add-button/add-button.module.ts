import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddButtonComponent } from './add-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AddButtonComponent],
  exports: [AddButtonComponent]
})
export class AddButtonModule { }

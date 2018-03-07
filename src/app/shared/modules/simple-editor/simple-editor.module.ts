import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimpleEditorComponent, SimpleEditorInputComponent } from './simple-editor.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    SimpleEditorComponent,
  ],
  exports: [SimpleEditorComponent],
  // entryComponents: [SimpleEditorInputComponent]
})
export class SimpleEditorModule { }

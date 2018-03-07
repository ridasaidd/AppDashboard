import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService, AuthGuard } from './';
import { SimpleEditorModule } from './modules/simple-editor/simple-editor.module';
import { AddButtonModule } from './modules/add-button/add-button.module';
import { PageHeaderModule } from './';

@NgModule({
  imports: [
    CommonModule,
    SimpleEditorModule,
    AddButtonModule,
    PageHeaderModule
  ],
  declarations: [],
  providers: [
    UserService,
    AuthGuard
  ],
  exports: [
    SimpleEditorModule,
    AddButtonModule,
    PageHeaderModule
  ]
})
export class SharedModule { }

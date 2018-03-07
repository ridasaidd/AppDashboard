import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
    { path: '', component: UsersComponent },
    { path: 'create', component: CreateComponent },
    { path: 'edit/:username', component: CreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}

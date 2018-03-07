import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        RestaurantsRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [RestaurantsComponent]
})
export class RestaurantsModule {}

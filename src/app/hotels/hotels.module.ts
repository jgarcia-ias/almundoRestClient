import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { HotelsComponent } from './hotels.component';
import { HotelsService } from './shared/hotels.service';
import { HotelFormComponent } from './hotel-form/hotel-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    HotelsComponent,
    HotelFormComponent
  ],
  exports: [
    HotelsComponent
  ],
  providers: [
    HotelsService
  ]
})
export class HotelsModule { }

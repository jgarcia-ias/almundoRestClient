import { Routes, RouterModule } from '@angular/router';

import { HotelsComponent } from './hotels.component';
import {HotelFormComponent} from "./hotel-form/hotel-form.component";

const hotelsRoutes: Routes = [
  { path: 'hotels', component: HotelsComponent, pathMatch: 'full' },
  { path: 'hotels/new', component: HotelFormComponent},
  { path: 'hotels/:id', component: HotelFormComponent}
];

export const hotelsRouting = RouterModule.forChild(hotelsRoutes);

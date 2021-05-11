import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { LeafletmapComponent } from './leafletmap/leafletmap.component';

const routes: Routes = [
  {path: 'Leaflet', component: LeafletmapComponent},
  {path: 'GoogleMaps', component: GooglemapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

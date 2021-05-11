import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OlmapComponent } from './olmap/olmap.component';
import { LeafletmapComponent } from './leafletmap/leafletmap.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { NavComponent } from './nav/nav.component';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopupService } from './popup.service';

@NgModule({
  declarations: [
    AppComponent,
    OlmapComponent,
    LeafletmapComponent,
    GooglemapComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MarkerService, PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }

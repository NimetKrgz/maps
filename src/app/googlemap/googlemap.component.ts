import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements AfterViewInit {

  @ViewChild('mapContainer', { static: false })
  gmap!: ElementRef;
    map!: google.maps.Map;
    lat = 41.029100;
    lng = 28.976600;
    coordinates = new google.maps.LatLng(this.lat, this.lng);

    mapOptions: google.maps.MapOptions = {
      center: this.coordinates,
      zoom: 12,
    };

    marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
   }


}






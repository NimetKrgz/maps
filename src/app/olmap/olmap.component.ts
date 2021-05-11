import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';
import { get as getProjection} from 'ol/proj';
import Feature from 'ol/Feature';
import sVector from 'ol/source/Vector';
import lVector from 'ol/layer/Vector';
import Point from 'ol/geom/Point';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import TileJSON from 'ol/source/TileJSON.js';
import VectorSource from 'ol/source/Vector.js';
import {Icon, Style} from 'ol/style.js';

import Base from 'ol/layer/Base';
import Geometry from 'ol/geom/Geometry';

register (proj4);
proj4.defs('EPSG:5637',
'+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10' + 
'+x_0=4000000 +y_0=2800000 +ellps=GRS80'+ 
'+towgs84=0,0,0,0,0,0,0 +units=m +no_defs');

const turkeyProjection = getProjection('EPSG: 5637'); 

@Component({
  selector: 'app-olmap',
  templateUrl: './olmap.component.html',
  styleUrls: ['./olmap.component.css']
})
export class OlmapComponent implements OnInit {
  map: Map | undefined;
  istanbulbir: any;
  istanbuliki : any;
  istanbuluc: any;
  vectorSource!: sVector<Geometry>;
  vectorLayer!: Base;
  rasterLayer!: Base;

  constructor() {}

  ngOnInit(): void {
    this.initializeMap();
  }
  initializeMap(){
    this.istanbulbir = new Feature({
      geometry: new Point (fromLonLat([28.886474, 41.026699]))
    });
    this.istanbulbir.setStyle(new Style({
      image: new Icon(({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        src: 'assets/vectorpoint.svg',
        imgSize: [20,20]
      }))
    }));
  
    this.istanbuliki = new Feature({
      geometry: new Point (fromLonLat([29.0014496, 41.042953]))
    });
    this.istanbuliki.setStyle(new Style({
      image: new Icon (({
        color: '#4271AE',
        crossOrigin: 'anonymous',
        src: 'assets/vectorpoint.svg',
        imgSize: [20,20]
      }))
    }));
      this.istanbuluc = new Feature({
        geometry: new Point (fromLonLat([29.026974, 40.990414]))
      });
      this.istanbuluc.setStyle(new Style({
        image: new Icon (({
          color: [113, 140, 0],
          crossOrigin: 'anonymous',
          src: 'assets/dot.png',
          imgSize: [20,20]
        }))
    }));
  
    this.vectorSource = new VectorSource ({
      features: [this.istanbulbir, this.istanbuliki, this.istanbuluc]
    });
  
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });
  
    this.rasterLayer = new TileLayer({
      source: new TileJSON({
        url: 'https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure',
        crossOrigin: ''
      })
    });
  
    this.map = new Map({
      view: new View({
        center: fromLonLat ([28.976600,41.029100]),
        zoom: 12,
        projection: turkeyProjection
      }),
      layers: [
        new Tile({
          source: new OSM(),
        }), this.rasterLayer, this.vectorLayer
      ],
      target: 'ol-map'
    });
  }
}

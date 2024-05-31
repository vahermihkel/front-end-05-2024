import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { ShopsService } from '../services/shops.service';
import { Shop } from '../models/shop';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
  private map: any;
  shops: Shop[] = [];

  constructor(private shopsService: ShopsService) {}

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 58.8033, 25.7541 ],
      zoom: 7
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void { 
    this.initMap();
    this.makeMarkers();
  }
  // 59.42189541155149, 24.793695335743845

  makeMarkers(): void {
    this.shopsService.shopsRequest().subscribe((shops: Shop[]) => {
      this.shops = shops;
      for (const s of shops) {
        const lon = s.longitude;
        const lat = s.latitude;
        const marker = L.marker([lat, lon]);

        // `Selle poe longitude on ${lon} ja latitude on ${lat}`;
        // "Selle poe longitude on" + lon + "ja latitude on" + lat;

        const popup = `<div>Poe nimi: ${ s.name }</div>` +
        `<div>Lahtiolekuaeg: ${ s.openTime }</div>`;
        
        marker.bindPopup(popup);

        marker.addTo(this.map);
      }
    });
  }

  zoomToShop(shop: Shop) {
    // this.map = L.map('map', {
    //   center: [ 57.8033, 26.7541 ],
    //   zoom: 6
    // });
  }

}

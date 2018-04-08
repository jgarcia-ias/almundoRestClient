import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HotelsService {

  private url: string = "http://localhost:3000/hoteles";

  constructor(private http: Http) { }

  getHotels(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getHotel(id){
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  addHotel(hotel){
    return this.http.post(this.url, JSON.stringify(hotel))
      .map(res => res.json());
  }

  updateHotel(hotel){
    return this.http.put(this.getUserUrl(hotel.id), JSON.stringify(hotel))
      .map(res => res.json());
  }

  deleteHotel(id){
    return this.http.delete(this.getUserUrl(id))
      .map(res => res.json());
  }

  private getUserUrl(id){
    return this.url + "/" + id;
  }
}

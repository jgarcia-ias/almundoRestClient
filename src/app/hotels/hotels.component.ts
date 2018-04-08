import { Component, OnInit } from '@angular/core';
import {HotelsService} from './shared/hotels.service';
import {Hotel} from './shared/hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  private hotels: Hotel[] = [];

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.getHotels()
      .subscribe(data => this.hotels = data);
  }

  deleteHotel(hotel){
    if (confirm('Are you sure you want to delete ' + hotel.name + '?')) {
      var index = this.hotels.indexOf(hotel);
      this.hotels.splice(index, 1);

      this.hotelsService.deleteHotel(hotel.id)
        .subscribe(null,
          err => {
            alert('Could not delete hotel.');
            // Revert the view back to its original state
            this.hotels.splice(index, 0, hotel);
          });
    }
  }

}

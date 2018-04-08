import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Hotel } from '../shared/hotel';
import { HotelsService } from '../shared/hotels.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  hotel: Hotel = new Hotel();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private hotelsService: HotelsService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      stars: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      price: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      images: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      amenities: ['', [
        Validators.required,
        Validators.minLength(3)
      ]]
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Edit Hotel' : 'New Hotel';

      if (!id)
        return;

      this.hotelsService.getHotel(id)
        .subscribe(
          hotel => this.hotel = hotel,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        hotelValue = this.form.value;

    if (hotelValue.id){
      result = this.hotelsService.updateHotel(hotelValue);
    } else {
      result = this.hotelsService.addHotel(hotelValue);
    }

    result.subscribe(data => this.router.navigate(['hotels']));
  }
}

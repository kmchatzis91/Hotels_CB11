import { Component, OnInit } from '@angular/core';
import { IHotel } from 'src/Models/Hotel';
import {HotelService}from '../../Services/hotel/hotel.service';

@Component({
  selector: 'app-listing-hotels',
  templateUrl: './listing-hotels.component.html',
  styleUrls: ['./listing-hotels.component.css']
})
export class ListingHotelsComponent implements OnInit {

  constructor(private hotelService:HotelService) { }

  ngOnInit(): void {
    this.AvailableHotels = this.hotelService.GetAllHotels();
  }

  AvailableHotels:IHotel[]=[];
  StarRating: number = 0;

}

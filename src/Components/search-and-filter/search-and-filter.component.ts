import { Component, OnInit } from '@angular/core';
import { IHotel } from 'src/Models/Hotel';
import { HotelService } from '../../Services/hotel/hotel.service';


@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.css']
})
export class SearchAndFilterComponent implements OnInit {

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    // this.AllHotels = this.hotelService.GetAllHotels();
    // this.SearchText="";
  }

  // SearchText: string="";
  // AllHotels: IHotel[] = [];

  // SearchHotelByName() {

  //   let FilteredHotels: IHotel[] = [];
  //   if (this.SearchText = "") {
  //     this.AllHotels = this.hotelService.GetAllHotels();
  //   }
  //   else {
  //     FilteredHotels = this.hotelService.GetAllHotels()
  //     .filter((fh) => fh.HotelName.includes(this.SearchText));
  //     this.AllHotels = FilteredHotels;
  //   }

  // }

}

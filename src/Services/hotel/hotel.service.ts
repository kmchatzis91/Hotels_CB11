import { Injectable } from '@angular/core';
import { AllHotels } from '../../MockupData/HotelMUD';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  GetAllHotels() {
    return AllHotels;
  }

}

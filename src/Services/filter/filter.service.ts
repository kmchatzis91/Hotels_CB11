import { Injectable } from '@angular/core';
import {AllFilters} from '../../MockupData/FilterMUD'

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  GetAllFilters(){
    return AllFilters;
  }

}

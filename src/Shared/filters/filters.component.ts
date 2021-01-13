import { Component, OnInit, OnChanges } from '@angular/core';
import { IFilter } from 'src/Models/Filter';
import { FilterService } from '../../Services/filter/filter.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.Filters = this.filterService.GetAllFilters();
   
  }

  Filters: IFilter[] = [];


}

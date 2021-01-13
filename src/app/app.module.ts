import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from '../Components/hotel/hotel.component';
import { SearchAndFilterComponent } from '../Components/search-and-filter/search-and-filter.component';
import { MapAndSortComponent } from '../Components/map-and-sort/map-and-sort.component';
import { ListingHotelsComponent } from '../Components/listing-hotels/listing-hotels.component';
import { FiltersComponent } from '../Shared/filters/filters.component';
import { RatingComponent } from '../Shared/rating/rating.component';
import { GuestRatingComponent } from '../Shared/guest-rating/guest-rating.component';

import { HotelService } from '../Services/hotel/hotel.service';
import { FilterService } from '../Services/filter/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent, SearchAndFilterComponent, MapAndSortComponent, ListingHotelsComponent,
    FiltersComponent, RatingComponent, GuestRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [HotelService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

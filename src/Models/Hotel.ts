import { IGuestRating } from "./Guest-Rating";
import {IFilter} from "./Filter";

export interface IHotel{
    HotelName:string;
    Rating:number;
    City:string;
    Thumbnail:string;
    Guestrating:IGuestRating[];
    MapUrl:string;
    Filters:IFilter[];
    Price:number;
}
import { IHotel } from "src/Models/Hotel";

export let AllHotels: IHotel[] = [
    {
        HotelName: "Hotel Lancaster",
        Rating: 4,
        City: "Paris",
        Thumbnail: "http://comerciodearrecife.com/wp-content/uploads/hotel-prueba-1.jpg",
        Guestrating: [{Num:8.8, Txt:"Excellent"}],
        MapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83998.94722687619!2d2.277019841665155!3d48.8588377391234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1554987763683!5m2!1sen!2sgr",
        Filters: [
            { Amenities: "Car Park" },
            { Amenities: "Sauna" },
            { Amenities: "Pool" },
            { Amenities: "Wifi" },
            { Amenities: "Balcony" }
        ],
        Price: 706
    },
    {
        HotelName: "Prince de Galles, a Laxury...",
        Rating: 5,
        City: "Toulouz",
        Thumbnail: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,f_auto,h_450,q_auto:eco,w_450/itemimages/42/88/42886_v5.jpeg",
        Guestrating: [{Num:9, Txt:"Excellent"}],
        MapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83998.94722687619!2d2.277019841665155!3d48.8588377391234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1554987763683!5m2!1sen!2sgr",
        Filters: [
            { Amenities: "Car Park" },
            { Amenities: "Sauna" },
            { Amenities: "Pool" }
        ],
        Price: 1213
    },
    {
        HotelName: "Hotel Hilton",
        Rating: 5,
        City: "Marseille",
        Thumbnail: "https://cdn.hotelplanner.com/Common/Images/_HotelPlanner/Home-Page/fade/sld6.jpg",
        Guestrating: [{Num:9.8, Txt:"Excellent"}],
        MapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83998.94722687619!2d2.277019841665155!3d48.8588377391234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1554987763683!5m2!1sen!2sgr",
        Filters: [
            { Amenities: "Pool" },
            { Amenities: "Wifi" },
            { Amenities: "Balcony" }
        ],
        Price: 1500
    }
]


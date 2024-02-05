export interface CategoryImages{
    id:number;
    url:string;
    image:string;
    title:string;
    subtitle:string;
    listing:string;
}

export interface PropertyDetails {
    [key: string]: string | number;
    'Property ID' : string;
    'Home Area' : string;
    'Rooms' : number;
    'Baths' : number;
    'Year built' : number;
    'Lot Area' : string;
    'Lot dimensions' : string;
    'Beds' : number;
    'Price' : number;
    'Property Status' : string;
  
  }
  
export interface CategoryImages {
  id: number;
  url: string;
  image: string;
  title: string;
  subtitle: string;
  listing: string;
}

interface PropertyListHeader {
  image: string;
  title: string;
  price: string;
  priceRate: string;
}

interface PropertyListBody {
  title: string;
  address: string;
  details: string;
}
interface PropertyListFooter {
  autor: string;
  agentName: string;
  agentOcupation: string;
}

export interface PropertyListItem {
  id: number;
  guid: string;
  header: PropertyListHeader;
  body: PropertyListBody;
  footer: PropertyListFooter;
}
export interface image {
  url: string;
}

export interface propertyDetailsContentHeader{
  title: string;
  statustitle: string;
  statussubtitle: string;
  publishDate : string;
  comments: number;
  location : string;
}
export interface propertyDetailsContentBody{
  description: string;
  propertyDetails: PropertyDetails;
  amenities: string[];
  gallery: string[];
  location: string;
}
export interface PropertyDetails {
  [key: string]: string | number;
  'Property ID': string;
  'Home Area': string;
  'Rooms': number;
  'Baths': number;
  'Year built': number;
  'Lot Area': string;
  'Lot dimensions': string;
  'Beds': number;
  'Price': number;
  'Property Status': string;
  
}
export interface propertyDetailsCarrusel {
  id: number;
  guid: string;
  gallery: string[];
}
export interface propertyDetailsContent{
  id: number;
  guid:string;
  header: propertyDetailsContentHeader;
  body: propertyDetailsContentBody;
}1
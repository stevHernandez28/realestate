import { Amenities, CategoryImages, PropertyDetails, PropertyListItem } from "../interface/interfaces";

export const dataPropertyList: PropertyListItem[] = [{
  id: 1,
  guid: '0140-1203-3012-3102-fad-d1',
  header: {
    image: './assets/house.jpg',
    title: 'FOR RENT',
    price: '$34,900',
    priceRate: '/Month'
  },
  body: {
    title: 'New Apartment Nice View',
    address: 'Belmont Gardens, Chicago',
    details: '3 Bed  2 Bath 3450 Square Ft'
  },
  footer: {
    autor: './assets/author.jpg',
    agentName: 'William Seklo',
    agentOcupation: 'Estate Agents'
  }
},
{
  id: 2,
  guid: '0140-1203-3012-3102-fad-d1',
  header: {
    image: './assets/house.jpg',
    title: 'FOR SELL',
    price: '$14,900',
    priceRate: ''
  },
  body: {

    title: 'New Apartment Nice View',
    address: 'Belmont Gardens, Chicago',
    details: '3 Bed  2 Bath 3450 Square Ft'
  },
  footer: {
    autor: './assets/author.jpg',
    agentName: 'William Seklo',
    agentOcupation: 'Estate Agents'
  }
},
]

export const images: CategoryImages[] = [
  {
    id: 1,
    url: '/property',
    image: './assets/image.jpeg',
    title: 'apartments',
    subtitle: 'Greag Deals Available',
    listing: 'deals'
  },
  {
    id: 2,
    url: '/property',
    image: './assets/gallery/hom4.jpg',
    title: 'apartments',
    subtitle: 'Greag Deals Available',
    listing: 'deals'
  },
  {
    id: 3,
    url: '/property',
    image: './assets/gallery/hom3.jpg',
    title: 'apartments',
    subtitle: 'Greag Deals Available',
    listing: 'deals'
  },
  {
    id: 4,
    url: '/property',
    image: './assets/gallery/home.jpg',
    title: 'apartments',
    subtitle: 'Greag Deals Available',
    listing: 'deals'
  },
  {
    id: 5,
    url: '/property',
    image: './assets/gallery/hom5.jpg',
    title: 'apartments',
    subtitle: 'Greag Deals Available',
    listing: 'deals'
  },
]


export const propertyDetails: PropertyDetails = {
  'Property ID': 'HZ29',
  'Home Area': '120 sqft',
  'Rooms': 7,
  'Baths': 2,
  'Year built': 1992,
  'Lot Area': 'HZ29',
  'Lot dimensions': '120 sqft',
  'Beds': 7,
  'Price': 2,
  'Property Status': 'For Sale'
};

export const amenities: Amenities[] = [
  {
    id: 1,
    amenities: ['gym', 'microwave', 'wifi', 'Refrigerator', 'Window Coverings', 'Washer', 'Air Conditioning', 'Barbeque', 'Recreation', 'Swimming Pool', 'Basketball Court', 'Fireplace', 'Indoor Game', '24x7 Security']
  }
];

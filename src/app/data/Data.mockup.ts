import { Amenities, CategoryImages, PropertyDetails } from "../interface/interfaces";

export const images : CategoryImages[] = [
    {
      id:1,
      url:'/property',
      image:'./assets/image.jpeg',
      title: 'apartments',
      subtitle:'Greag Deals Available',
      listing: 'deals'
    },
    {
      id:2,
      url:'/property',
      image:'./assets/gallery/hom4.jpg',
      title: 'apartments',
      subtitle:'Greag Deals Available',
      listing: 'deals'
    },
    {
      id:3,
      url:'/property',
      image:'./assets/gallery/hom3.jpg',
      title: 'apartments',
      subtitle:'Greag Deals Available',
      listing: 'deals'
    },
    {
      id:4,
      url:'/property',
      image:'./assets/gallery/home.jpg',
      title: 'apartments',
      subtitle:'Greag Deals Available',
      listing: 'deals'
    },
    {
      id:5,
      url:'/property',
      image:'./assets/gallery/hom5.jpg',
      title: 'apartments',
      subtitle:'Greag Deals Available',
      listing: 'deals'
    },
  ]


  export const propertyDetails : PropertyDetails = {
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

export const amenities : Amenities[] = [
    {
      id: 1,
      amenities: ['gym', 'microwave', 'wifi', 'Refrigerator', 'Window Coverings', 'Washer', 'Air Conditioning', 'Barbeque', 'Recreation', 'Swimming Pool', 'Basketball Court', 'Fireplace', 'Indoor Game', '24x7 Security']
    }
  ];

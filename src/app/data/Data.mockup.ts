import {  CategoryImages, PropertyListItem, propertyDetailsContent } from "../interface/interfaces";

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



export const PropertyDetailsContent : propertyDetailsContent[] =[ {
  id: 1,
  guid: "010293-383830-383828",
  header: {
    title: 'Diamond Manor Apartment',
    statustitle: "Featured",
    statussubtitle: "For rent",
    publishDate: "May 19, 2021",
    comments: 35,
    location: 'Belmont Gardens, Chicago'
  },
  body: {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, itaque enim
    numquam asperiores facilis libero ipsum perferendis iste? Velit soluta repellat sint doloremque quos
    excepturi aut veritatis fuga. Officia, voluptatum eius quaerat recusandae ratione deleniti repellat
    aspernatur hic quisquam error facere labore quis quasi dolore quibusdam explicabo. Obcaecati
    consequuntur rem libero qui iusto delectus. Repudiandae ea minus laboriosam facilis quasi id impedit
    quis doloremque molestiae eaque laudantium eligendi eum qui, dolores debitis temporibus tempora!
    Repellat, iusto nisi. Quaerat cumque distinctio, placeat quasi perspiciatis dicta dolorum officiis
    asperiores officia eos! Ullam quod at rerum voluptatibus iure ratione beatae adipisci, laudantium sit.
    
    To the left is the modern kitchen with central island, leading through to the unique breakfast family
    rooms which feature glass walls and doors out onto the garden and access to the separate utility room.
    `,
    propertyDetails: {
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
    },
    amenities: ['gym', 'microwave', 'wifi', 'Refrigerator', 'Window Coverings', 'Washer', 'Air Conditioning', 'Barbeque', 'Recreation', 'Swimming Pool', 'Basketball Court', 'Fireplace', 'Indoor Game', '24x7 Security']
    ,
    gallery: ['./assets/image.jpeg', './assets/image.jpeg', './assets/image.jpeg'],
    location: 'https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=calle la rosa&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&amp;loading=async'
  
  },

},{
  id: 2,
  guid: "55123-31233-12551",
  header: {
    title: 'Gold Minor House',
    statustitle: "Featured",
    statussubtitle: "For Sell",
    publishDate: "May 19, 2021",
    comments: 35,
    location: 'Belmont Gardens, Chicago'
  },
  body: {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, itaque enim
    numquam asperiores facilis libero ipsum perferendis iste? Velit soluta repellat sint doloremque quos
    excepturi aut veritatis fuga. Officia, voluptatum eius quaerat recusandae ratione deleniti repellat
    aspernatur hic quisquam error facere labore quis quasi dolore quibusdam explicabo. Obcaecati
    consequuntur rem libero qui iusto delectus. Repudiandae ea minus laboriosam facilis quasi id impedit
    quis doloremque molestiae eaque laudantium eligendi eum qui, dolores debitis temporibus tempora!
    Repellat, iusto nisi. Quaerat cumque distinctio, placeat quasi perspiciatis dicta dolorum officiis
    asperiores officia eos! Ullam quod at rerum voluptatibus iure ratione beatae adipisci, laudantium sit.
    
    To the left is the modern kitchen with central island, leading through to the unique breakfast family
    rooms which feature glass walls and doors out onto the garden and access to the separate utility room.
    `,
    propertyDetails: {
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
    },
    amenities: ['gym', 'microwave', 'wifi', 'Refrigerator', 'Window Coverings', 'Washer', 'Air Conditioning', 'Barbeque', 'Recreation', 'Swimming Pool', 'Basketball Court', 'Fireplace', 'Indoor Game', '24x7 Security']
    ,
    gallery: ['./assets/image.jpeg', './assets/image.jpeg', './assets/image.jpeg'],
    location: 'https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=calle la rosa&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&amp;loading=async'
  
  },

}
]

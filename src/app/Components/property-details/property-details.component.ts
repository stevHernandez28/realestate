import { Component } from '@angular/core';
import { image } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent {

  //todo: eniviar desde el componente de detalles todos los datos que necesitan los componentes hijos
  //TODO: hacer un servicio que por medio de la url + GUID pueda consultar una data y agregarlos al componente
  image: image[] = [
    {
      url: './assets/image.jpeg'
    },
    {
      url: './assets/image.jpeg'
    },
    {
      url: './assets/image.jpeg'
    },
    {
      url: './assets/image.jpeg'
    },
  ]

propertyDetailsContent = {
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
      room which feature glass walls and doors out onto the garden and access to the separate utility room.
      `
    },
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
    amenities:  ['gym', 'microwave', 'wifi', 'Refrigerator', 'Window Coverings', 'Washer', 'Air Conditioning', 'Barbeque', 'Recreation', 'Swimming Pool', 'Basketball Court', 'Fireplace', 'Indoor Game', '24x7 Security']
    ,
    gallery: ['./assets/image.jpeg', './assets/image.jpeg', './assets/image.jpeg'],
    location: 'https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=calle la rosa&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&amp;loading=async'
  }


}

//house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
//house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
//  apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

//agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: House1,
    imageLg: House1Lg,
    city: 'Bangalore',
    address: 'Hoysala Habitat',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Jai Shah',
      phone: '9639847276',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: House2,
    imageLg: House2Lg,
    city: 'Pune',
    address: 'Sobha Villas',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Ishaan Kattar',
      phone: '9639847276',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: House3,
    imageLg: House3Lg,
    city: 'Bangalore',
    address: 'Ramky North Villas',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amar Singh',
      phone: '9639847276',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: House4,
    imageLg: House4Lg,
    city: 'Mumbai',
    address: 'Tulip Grand Villas',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Dhruv Rathi',
      phone: '9639847276',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: House5,
    imageLg: House5Lg,
    city: 'Bangalore',
    address: 'Prestige Grand Homes',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Garauv Taneja',
      phone: '9639847276',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: House6,
    imageLg: House6Lg,
    city: 'Pune',
    address: 'VajRam Paradise',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Nikhil Sharma',
      phone: '9639847276',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: Apartment1,
    imageLg: Apartment1Lg,
    city: 'Mumbai',
    address: 'Sobha Apartments',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Kunal Kamra',
      phone: '9639847276',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: Apartment2,
    imageLg: Apartment2Lg,
    city: 'Bangalore',
    address: 'Ion Groups Apartments',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Nancy Singh',
      phone: '9639847276',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: Apartment3,
    imageLg: Apartment3Lg,
    city: 'Bangalore',
    address: 'DLF Grand Apartments',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Priya Singh',
      phone: '9639847276',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: House7,
    imageLg: House7Lg,
    city: 'Mumbai',
    address: 'Tekion Groups Villas',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Karan Deep',
      phone: '9639847276',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: House8,
    imageLg: House8Lg,
    city: 'Mumbai',
    address: 'Grand Homes',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Anmol Bisht',
      phone: '9639847276',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: House9,
    imageLg: House9Lg,
    city: 'Hyderabad',
    address: 'Hoysala Habitat ',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Nipun Bajaj',
      phone: '9639847276',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: House10,
    imageLg: House10Lg,
    city: 'Mumbai',
    address: 'Prestige Royals',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Prateek Banga',
      phone: '9639847276',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: House11,
    imageLg: House11Lg,
    city: 'Hyderabad',
    address: 'DLF Royals',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Prasoon Yadav',
      phone: '9639847276',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: House12,
    imageLg: House12Lg,
    city: 'Mumbai',
    address: 'KKR Groups',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Abhinav Jha',
      phone: '9639847276',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: Apartment4,
    imageLg: Apartment4Lg,
    city: 'Mumbai',
    address: 'Hiranandani ',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Tanmay Sharma',
      phone: '9639847276',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: Apartment5,
    imageLg: Apartment5Lg,
    city: 'Bangalore',
    address: 'DLF Alpha',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Karthik Singh',
      phone: '9639847276',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      '“Remodeled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodeled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!”',
    image: Apartment6,
    imageLg: Apartment6Lg,
    city: 'Mumbai',
    address: 'Kingfisher Apartments',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Subham Dev',
      phone: '9639847276',
    },
  },
];

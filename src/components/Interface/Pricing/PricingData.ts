interface PricingData {
  id: number;
  title: string;
  price: string;
  btnColor: string;
  cardColor?: string;
  offers: {
    id: number;
    text: string;
  }[];
}

export const pricingData = [
  {
    id: 1,
    title: 'Free',
    price: '0',
    btnColor: '#A522C3',
    cardColor: 'rgba(165, 34, 195, 0.15)',
    offers: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 2,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 3,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 4,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
    ],
  },
  {
    id: 2,
    title: 'Lite',
    price: '24',
    btnColor: '#2228C3',
    cardColor: 'rgba(34, 41, 208, 0.15)',
    offers: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 2,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 3,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 4,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 5,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 6,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
    ],
  },
  {
    id: 1,
    title: 'Standard',
    price: '40',
    btnColor: '#22A6C3',
    cardColor: 'rgba(14, 164, 196, 0.15)',
    offers: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 2,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 3,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 4,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 5,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 6,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        id: 7,
        text: 'Lorem ipsum dolor sit amet consectetur.',
      },
    ],
  },
] as PricingData[];

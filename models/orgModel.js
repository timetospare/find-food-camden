const orgModel = [
  {
    name: 'Kintish Toon Community Centre',
    payment: 'No payment needed',
    referralRequired: false,
    categories: ['vegetarian', 'kosher'],
    open: ['Wednesday', 'Thursday', 'Friday'],
    coverPhoto:
      'https://www.c4consortium.org.uk/wp-content/uploads/sidings2.jpg',
    description:
      'We run projects for the community, support local people and offer spaces for hire. We run a foodbank three days a week, offering up to 10 store cupboard items such as tinned fruit, vegetables, pasta, rice, beans, milk and cereals to people in need. We also have a recipe club',
    venue: {
      geopoint: {
        lat: 51.54829,
        lon: -0.13248,
      },
    },
    contactDetails: {
      number: '07954 123 456',
      email: 'kintishtown@email.com',
      website: 'kintishtown.org.uk',
    },
    catchmentArea: {
      type: 'Polygon',
      coordinates: [
        [
          [-0.1388389568756031, 51.56135116013339],
          [-0.15506218691428425, 51.55550406120879],
          [-0.15079622973640924, 51.544428962890386],
          [-0.13378389244294586, 51.535179547135094],
          [-0.12296840575142473, 51.53825073936948],
          [-0.13114360655063975, 51.55110913852016],
          [-0.1388389568756031, 51.56135116013339],
        ],
      ],
    },
  },
  {
    name: 'Dragoon Hall Covent Garden',
    payment: "£2 for a week's parcel",
    coverPhoto:
      'https://www.dragonhall.org.uk/wp-content/uploads/food-on-table-655x486.jpg',
    referralRequired: true,
    categories: ['halal', 'kosher', 'delivery'],
    open: ['Monday', 'Wednesday', 'Friday'],
    description:
      'Covent Garden Dragon Hall Trust is a charity organisation serving the needs of local people with a specific focus on children, young people and older residents.',
    contactDetails: {
      number: '07954 123 456',
      email: 'dragoonhall@email.com',
      website: 'dragonhall.org.uk',
    },
    venue: {
      geopoint: {
        lat: 51.51662,
        lon: -0.12269,
      },
    },
  },
  {
    name: 'Catthorpe Community Garden',
    payment: "£2 for a week's basket",
    referralRequired: true,
    coverPhoto:
      'https://images.unsplash.com/photo-1591818949732-4bad71ef07f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
    categories: ['hot meals', 'vegetarian'],
    open: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    description:
      "We don’t think anyone in our community should have to face going hungry. That’s why we provide a week's worth of nutritionally balanced emergency food and support to local people who are referred to us in crisis.",
    contactDetails: {
      number: '07954 123 456',
      email: 'catthorpecg@email.com',
      website: 'catthorpecg.org.uk',
    },
    venue: {
      geopoint: {
        lat: 51.52683,
        lon: -0.11795,
      },
    },
  },
  {
    name: 'Eustown Foodbank',
    payment: 'No payment needed',
    referralRequired: true,
    coverPhoto:
      'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    categories: ['hot meals', 'vegetarian', 'halal', 'delivery'],
    open: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    description:
      'We don’t think anyone in our community should have to face going hungry. That’s why we provide three days’ nutritionally balanced emergency food and support to local people who are referred to us in crisis.',
    contactDetails: {
      number: '07954 123 456',
      email: 'eustownfb@email.com',
      website: 'euston.foodbank.org.uk',
    },
    venue: {
      geopoint: {
        lat: 51.52842,
        lon: -0.13146,
      },
    },
  },
  {
    name: 'Siblings Centre',
    payment: 'No payment needed',
    coverPhoto:
      'https://images.unsplash.com/photo-1584263347416-85a696b4eda7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    referralRequired: true,
    categories: ['hot meals', 'vegetarian', 'halal', 'delivery'],
    open: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
    description:
      'Our Food Bank is now operating a collection service for people who are able to come to pick up their food. If you are self-isolating, have a disability or are unable to reach this address, we can arrange a delivery (currently on Tuesdays to Fridays).',
    contactDetails: {
      number: '07954 123 456',
      email: 'siblingscentre@email.com',
      website: 'testwebsite.org.uk',
    },
    venue: {
      geopoint: {
        lat: 51.5489307,
        lon: -0.1990682,
      },
    },
  },
];

export default orgModel;

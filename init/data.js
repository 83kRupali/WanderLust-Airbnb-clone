// const sampleListing = [
//   { 
//     title: "My New Villa",
//     description: "By the beach",
//     image: {
//       url: "https://th.bing.com/th/id/OIP.Dq-om9EaIh0hYlmh0lE3OQHaEK?r=0&w=720&h=405&rs=1&pid=ImgDetMain&cb=idpwebpc2",
//       filename: "myNewVilla"
//     },
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India"
//   },
//   {  
//     title: "Himalayan Retreat",
//     description: "Cozy cottage with mountain view",
//     image: {
//       url: "https://th.bing.com/th/id/OIP.SQ9W9qqfZ0S1hHwmxs77QAHaE8?r=0&pid=ImgDet&w=474&h=316&rs=1&cb=idpwebpc2",
//       filename: "himalayanRetreat"
//     },
//     price: 800,
//     location: "Manali, Himachal Pradesh",
//     country: "India"
//   },
//   { 
//     title: "Luxury Apartment",
//     description: "Modern apartment in the city center",
//     image: {
//       url: "https://th.bing.com/th/id/OIP.xGXWB0UAv9V2G8S4LV62qgHaE8?r=0&pid=ImgDet&w=474&h=316&rs=1&cb=idpwebpc2",
//       filename: "luxuryApartment"
//     },
//     price: 2000,
//     location: "Bandra, Mumbai",
//     country: "India"
//   },
//   { 
//     title: "Desert Camp",
//     description: "Traditional Rajasthani tents under the stars",
//     image: {
//       url: "https://th.bing.com/th/id/OIP.6YuKf7s0NHP1xPFusFQ71AHaE8?r=0&pid=ImgDet&w=474&h=316&rs=1&cb=idpwebpc2",
//       filename: "desertCamp"
//     },
//     price: 500,
//     location: "Jaisalmer, Rajasthan",
//     country: "India"
//   },
//   { 
//     title: "Backwater Houseboat",
//     description: "Houseboat experience with Kerala cuisine",
//     image: {
//       url: "https://interestpin.com.au/btabcloud/uploads/2019/11/bedrooms-private-holiday-home-in-phuket-15737022028lc4p.jpg",
//       filename: "backwaterHouseboat"
//     },
//     price: 1500,
//     location: "Alleppey, Kerala",
//     country: "India"
//   },
//   { 
//     title: "Hilltop Homestay",
//     description: "Family-friendly stay with homemade food",
//     image: {
//       url: "https://thepointsguy.global.ssl.fastly.net/us/originals/2020/06/Colorado-luxury-home.jpg?width=1200",
//       filename: "hilltopHomestay"
//     },
//     price: 700,
//     location: "Coorg, Karnataka",
//     country: "India"
//   },
//   { 
//     title: "Snow Cabin",
//     description: "Charming snow cabin in the mountains",
//     image: {
//       url: "https://a0.muscache.com/im/pictures/456741eb-e60d-4bf4-908c-829d55102c63.jpg?aki_policy=x_large",
//       filename: "snowCabin"
//     },
//     price: 1300,
//     location: "Gulmarg, Jammu & Kashmir",
//     country: "India"
//   },
//   { 
//     title: "Lake View Bungalow",
//     description: "Serene views and peaceful surroundings",
//     image: {
//       url: "https://www.myglobalviewpoint.com/wp-content/uploads/2020/12/2a-magic-mansion-airbnb-miami.jpg",
//       filename: "lakeViewBungalow"
//     },
//     price: 1100,
//     location: "Nainital, Uttarakhand",
//     country: "India"
//   },
//   { 
//     title: "Urban Studio",
//     description: "Compact studio apartment near metro",
//     image: {
//       url: "https://th.bing.com/th/id/OIP.vsyRnGf_JotYuRFltj8nUAHaE_?r=0&pid=ImgDet&w=474&h=319&rs=1&cb=idpwebpc2",
//       filename: "urbanStudio"
//     },
//     price: 950,
//     location: "Saket, New Delhi",
//     country: "India"
//   },
//   { 
//     title: "Forest Treehouse",
//     description: "A peaceful escape among the trees",
//     image: {
//       url: "https://st.hzcdn.com/simgs/pictures/pools/boca-raton-lateulade-photography-img~7ef16b320b4f62b8_9-5983-1-acde7db.jpg",
//       filename: "forestTreehouse"
//     },
//     price: 1050,
//     location: "Wayanad, Kerala",
//     country: "India"
//   }
// ];

// module.exports = { data: sampleListing };

















const sampleListing = [
  {
    title: "My New Villa",
    description: "By the beach",
    image: {
      url: "https://th.bing.com/th/id/OIP.Dq-om9EaIh0hYlmh0lE3OQHaEK?r=0&w=720&h=405&rs=1&pid=ImgDetMain&cb=idpwebpc2",
      filename: "myNewVilla"
    },
    price: 1200,
    location: "Calangute, Goa",
    country: "India",
    geometry: { type: "Point", coordinates: [73.7631, 15.5439] }
  },
  {
    title: "Himalayan Retreat",
    description: "Cozy cottage with mountain view",
    image: {
      url: "https://th.bing.com/th/id/OIP.SQ9W9qqfZ0S1hHwmxs77QAHaE8?r=0&pid=ImgDet&w=474&h=316&rs=1&cb=idpwebpc2",
      filename: "himalayanRetreat"
    },
    price: 800,
    location: "Manali, Himachal Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1887, 32.2396] }
  },
  {
    title: "Luxury Apartment",
    description: "Modern apartment in the city center",
    image: {
      url: "https://th.bing.com/th/id/OIP.xGXWB0UAv9V2G8S4LV62qgHaE8?r=0&pid=ImgDet&w=474&h=316&rs=1&cb=idpwebpc2",
      filename: "luxuryApartment"
    },
    price: 2000,
    location: "Bandra, Mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8376, 19.0606] }
  },
  {
    title: "Desert Camp",
    description: "Traditional Rajasthani tents under the stars",
    image: {
      url: "https://th.bing.com/th/id/OIP.6YuKf7s0NHP1xPFusFQ71AHaE8?r=0&pid=ImgDet&w=474&h=316&rs=1&cb=idpwebpc2",
      filename: "desertCamp"
    },
    price: 500,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    geometry: { type: "Point", coordinates: [70.9167, 26.9157] }
  },
  {
    title: "Backwater Houseboat",
    description: "Houseboat experience with Kerala cuisine",
    image: {
      url: "https://interestpin.com.au/btabcloud/uploads/2019/11/bedrooms-private-holiday-home-in-phuket-15737022028lc4p.jpg",
      filename: "backwaterHouseboat"
    },
    price: 1500,
    location: "Alleppey, Kerala",
    country: "India",
    geometry: { type: "Point", coordinates: [76.3375, 9.4981] }
  },
  {
    title: "Hilltop Homestay",
    description: "Family-friendly stay with homemade food",
    image: {
      url: "https://thepointsguy.global.ssl.fastly.net/us/originals/2020/06/Colorado-luxury-home.jpg?width=1200",
      filename: "hilltopHomestay"
    },
    price: 700,
    location: "Coorg, Karnataka",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8069, 12.3375] }
  },
  {
    title: "Snow Cabin",
    description: "Charming snow cabin in the mountains",
    image: {
      url: "https://a0.muscache.com/im/pictures/456741eb-e60d-4bf4-908c-829d55102c63.jpg?aki_policy=x_large",
      filename: "snowCabin"
    },
    price: 1300,
    location: "Gulmarg, Jammu & Kashmir",
    country: "India",
    geometry: { type: "Point", coordinates: [74.3886, 34.0484] }
  },
  {
    title: "Lake View Bungalow",
    description: "Serene views and peaceful surroundings",
    image: {
      url: "https://www.myglobalviewpoint.com/wp-content/uploads/2020/12/2a-magic-mansion-airbnb-miami.jpg",
      filename: "lakeViewBungalow"
    },
    price: 1100,
    location: "Nainital, Uttarakhand",
    country: "India",
    geometry: { type: "Point", coordinates: [79.4636, 29.3919] }
  },
  {
    title: "Urban Studio",
    description: "Compact studio apartment near metro",
    image: {
      url: "https://th.bing.com/th/id/OIP.vsyRnGf_JotYuRFltj8nUAHaE_?r=0&pid=ImgDet&w=474&h=319&rs=1&cb=idpwebpc2",
      filename: "urbanStudio"
    },
    price: 950,
    location: "Saket, New Delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2100, 28.5224] }
  },
  {
    title: "Forest Treehouse",
    description: "A peaceful escape among the trees",
    image: {
      url: "https://st.hzcdn.com/simgs/pictures/pools/boca-raton-lateulade-photography-img~7ef16b320b4f62b8_9-5983-1-acde7db.jpg",
      filename: "forestTreehouse"
    },
    price: 1050,
    location: "Wayanad, Kerala",
    country: "India",
    geometry: { type: "Point", coordinates: [76.1310, 11.6854] }
  }
];

module.exports = { data: sampleListing };

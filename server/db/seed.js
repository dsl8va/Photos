const {Listings, db} = require('./index.js');

// seeding database
var listing1 = new Listings({
  address: '1234 W Example Lane',
  price: 500000,
  beds: 3,
  baths: 2,
  photos: [{url:'photo1'}, {url:'photo2'}, {url:'photo3'}]
})
listing1.save();
var listing2 = new Listings({
  address: '5678 E Pretend St',
  price: 800000,
  beds: 4,
  baths: 3,
  photos: [{url:'photo1'}, {url:'photo2'}, {url:'photo3'}, {url: 'photo 4'}]
})
listing2.save();
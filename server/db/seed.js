const {Listings, db} = require('./index.js');
const faker = require('faker');
const data = require('./photoData.js');


// seeding database
for (var i = 0; i < 100; i++) {
  var house = data.houses[Math.floor(Math.random() * data.houses.length)];
  var bedroom1 = data.bedrooms[Math.floor(Math.random() * data.bedrooms.length)];
  var bedroom2 = data.bedrooms[Math.floor(Math.random() * data.bedrooms.length)];
  var kitchen = data.kitchens[Math.floor(Math.random() * data.kitchens.length)];
  var livingRoom = data.livingRooms[Math.floor(Math.random() * data.livingRooms.length)];

  var options = {
    id: i,
    address: faker.address.streetAddress(),
    price: Math.floor(faker.random.number({min: 300000, max: 1500000})/100000) * 100000,
    beds: faker.random.number({min: 2, max: 4}),
    baths: faker.random.number({min: 2, max: 3}),
    photos: [house, bedroom1, bedroom2, kitchen, livingRoom]
  }
  var newListing = new Listings(options);
  newListing.save();
}

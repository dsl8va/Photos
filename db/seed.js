const {Listings, db} = require('./index.js');
const faker = require('faker');
const data = require('./photoData.js');

// get photos randomly without getting duplicates
var getRandomPhotos = (array, numOfPhotos) => {
  var randomPhotos = [];
  while (numOfPhotos > 0) {
    var randomImg = array[Math.floor(Math.random() * array.length)]
    if (!randomPhotos.includes(randomImg)) {
      randomPhotos.push(randomImg);
      numOfPhotos--;
    }
  }
  return randomPhotos;
}

// seeding database
for (var i = 1; i <= 100; i++) {
  var house = data.houses[Math.floor(Math.random() * data.houses.length)];
  var bedrooms = getRandomPhotos(data.bedrooms, 3);
  var kitchens = getRandomPhotos(data.kitchens, 2);
  var livingRooms = getRandomPhotos(data.livingRooms, 2);
  var bathrooms = getRandomPhotos(data.bathrooms, 2);

  var options = {
    id: i,
    address: faker.address.streetAddress(),
    state: faker.address.state(),
    city: faker.address.city(),
    zipCode: Math.floor(Math.random() * 90000) + 10000,
    price: Math.floor(faker.random.number({min: 300000, max: 1500000})/100000) * 100000,
    beds: faker.random.number({min: 2, max: 4}),
    baths: faker.random.number({min: 2, max: 3}),
    photos: [house, bedrooms[0], kitchens[0], bathrooms[0], livingRooms[0], bedrooms[1], kitchens[1], bedrooms[2], bathrooms[1], livingRooms[1]]
  }
  var newListing = new Listings(options);
  newListing.save();
}

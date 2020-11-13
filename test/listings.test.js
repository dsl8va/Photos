const mongoose = require('mongoose');
const {Listings, db} = require('../server/db/index.js')
const app = require('../server/index.js')
const axios = require('axios');
const supertest = require('supertest');

// allows to make API calls on routes
const request = supertest(app);

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost/testListings', {
    userNewUrlParser: true,
    useCreateIndex: true
  }, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  })
  db = mongoose.connection;
})

afterAll(async () => {
  await db.close();
})

describe('Listings Model Test', () => {
  let connect;
  let db;

  it('should get all listings from listings collection', async (done) => {
    const res = await request.get('/api/listings')

    expect(res.length).toEqual(2)
    done();
  })

})

// test('Reading from Database', () => {

//   it('gets all documents from listings collection', (done) => {
//     axios.get('/api/listings')
//       .then(listings => expect(listings.length).to.equal(2))
//       done();
//   })

// })
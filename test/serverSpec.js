const expect = require('chai').expect;
const db = require('../server/db/index.js')
const axios = require('axios');

describe('Reading from Database', () => {

  it('gets all documents from listings collection', (done) => {
    axios.get('/api/listings')
      .then(listings => expect(listings.length).to.equal(2))
      done();
  })

})
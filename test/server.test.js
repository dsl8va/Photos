const mongoose = require('mongoose');
const app = require('../server/app.js')
const axios = require('axios');
const supertest = require('supertest');

// allows to make API calls on routes
const request = supertest(app);

describe('Test /api/listings/:id path', () => {

  it('should respond to GET method with each listing by its id', async (done) => {
    for (var id = 1; id <= 100; id++) {
      let res = await request.get(`/api/listings/${id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.id).toEqual(id);
    }
    done();
  });

  it('should respond with 404 for a listing that does not exist', async (done) => {
    let res = await request.get('/api/listings/101');
    expect(res.statusCode).toBe(404);
    done();
  })

});
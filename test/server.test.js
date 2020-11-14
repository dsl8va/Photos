const mongoose = require('mongoose');
const app = require('../server/app.js')
const axios = require('axios');
const supertest = require('supertest');

// allows to make API calls on routes
const request = supertest(app);

beforeAll(async (done) => {
  await mongoose.disconnect();

  mongoose.connect('mongodb://localhost/photosTest', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', (err) => done.fail(err));
  db.once('open', () => done());
  done();
});

// Runs after all tests in this file have finished!

describe('Test /api/listings path', () => {
  it('should respond to GET method', async (done) => {
    const response = await request.get('/api/listings/1');
    expect(response.statusCode).toBe(200);
    done();
  });j
});

afterAll(async (done) => {
  await mongoose.disconnect();
  done();
});
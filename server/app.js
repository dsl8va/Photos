const express = require('express');
const app = express();
const db = require('../db/index.js');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/listings/:id', (req, res) => {
  // const listing = await db.Listings.findOne({id: req.params.id});
  // if (!listing) {
  //   res.status(404).send('Listing does not exist')
  // } else {
  //   res.status(200).send(listing);
  // }

  db.Listings.findOne({id: req.params.id})
    .then(listing => {
      res.status(200).send(listing);
    })
    .catch(err => {
      console.error(err);
      res.status(404).send(err);
    })
})

module.exports = app;
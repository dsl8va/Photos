const express = require('express');
const app = express();
const port = 3001;

const db = require('./db/index.js');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/client/dist'))

app.get('/api/listings', (req, res) => {
  db.Listings.findOne({
    id: req.body.id
  })
    .then(listing => {
      res.send(listing);
    })
    .catch(err => {
      console.log(err);
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app;
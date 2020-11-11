var mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/FEC_photos');

const db = mongoose.connection;
db.once('open', () => console.log('Connected to database!'));

const PhotosSchema = new mongoose.Schema({
  url: String
});

const ListingsSchema = new mongoose.Schema({
    address: {
      type: String,
      unique: true,
    },
    price: Number,
    beds: Number,
    baths: Number,
    photos: [PhotosSchema]
});

const Listings = mongoose.model('listings', ListingsSchema);

module.exports = {
  Listings,
  db
}

// Listings Collection
// [
//   {
//     "address": String,
//     "price": Number,
//     "beds": Number,
//     "baths": Number
//     "photos": Array
//   }
// ]

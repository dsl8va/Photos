var mongoose = require('mongoose');

const listingsSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true
    }
  }
)


// Listings Collection
// [
//   {
//     "address": String,
//     "price": Number,
//     "beds": Number,
//     "baths": Number,
//     "photos": [
//       {
//         "url": String,
//         "description": String
//       },
//       {
//         "url": String,
//         "description": String
//       }
//     ]
//   }
// ]
var mongoose = require('mongoose');

const photoScehma = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true
    }
  }
)
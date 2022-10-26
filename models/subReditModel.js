const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subReditSchema = new Schema({
      community_name: {
        type: String,
        required: [true, 'Subredit must have a name'],
      },
     
      description: {
        type: String,
        required: [true, 'Please add description'],
      },

      community_type: {
        type: String,
        required: [true, 'Choose a community type']
      }
      
    },
    {
      timestamps: true,
})

module.exports = mongoose.model('SubRedit', subReditSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
      title: {
        type: String,
        required: [true, 'Subredit must have a name'],
      },
     
      body: {
        type: String,
        required: [true, 'Please add description'],
      },


      user_id: {
        type: String,
        required: [true]
      },

      subredit_id: {
        type: String,
        required: [true]
      }
      
    },
    {
      timestamps: true,
})

module.exports = mongoose.model('Post', postSchema)
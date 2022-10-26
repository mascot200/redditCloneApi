const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    
      body: {
        type: String,
        required: [true, 'Please add comment'],
      },


      user_id: {
        type: String,
        required: [true]
      },

      post_id: {
        type: String,
        required: [true]
      }
      
    },
    {
      timestamps: true,
})

module.exports = mongoose.model('Comment', commentSchema)
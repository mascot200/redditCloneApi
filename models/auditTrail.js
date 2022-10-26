const mongoose = require('mongoose')
const Schema = mongoose.Schema

const auditSchema = new Schema({
      activity_title: {
        type: String,
      },
     
      description: {
        type: String,
      },

      activity_type: {
        type: String,
      },
    },
    {
      timestamps: true,
})

module.exports = mongoose.model('Audit', auditSchema)
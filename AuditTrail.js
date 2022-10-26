const express = require('express');
Audit = require('./models/auditTrail')

const createAudit = async (activity_title, description, activity_type) => {
   try {
    let payload = {
        activity_type,
        description,
        activity_title
    }
    await Audit.create(payload)
   } catch (error) {
    console.error(error)
   }
}

module.exports = createAudit;
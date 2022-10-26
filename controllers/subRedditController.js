const { response } = require('express')
const SubRedit = require('../models/subReditModel')
const {monitorSubReditCreationUsingHasNext, monitorSubReditUpdateUsingHasNext} = require('../ChangeStream')


// @desc    Create a new SubRedit
// @route   POST /api/r/
// @access  Private
const createSubReddit = async (req, res) => {
    let { community_name, user_id, description, community_type } = req.body
     try {
        const payload = {
            community_name,
            user_id,
            description,
            community_type
        }
        const createdReddit = await SubRedit.create(payload)
        monitorSubReditCreationUsingHasNext()
        res.status(200).json({ message: "Subredit has been created successfully", code: 200, status: 'Success', createdReddit})
    
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error creating Subredit", code: 500, status: 'Error'})
     }
}

// @desc    Edit  SubRedit
// @route   PUT /api/r/update
// @access  Private
const updateSubReddit = async(req, res) => {
    let {community_name, description, community_type  } = req.body;
    let id = req.params.id;
    try {
        let payload = {
            community_name, description, community_type 
        }
        await SubRedit.findByIdAndUpdate(id, payload)
        res.status(200).json({ message: 'SubRedit updated successfully', code: 200, status: 'Success'})
        monitorSubReditUpdateUsingHasNext()
    } catch (error) {
        res.status(500).json({ message: 'Error updating Redit', code: 500, status: 'Error', error})
    }
}

module.exports = {
    createSubReddit,
    updateSubReddit
}
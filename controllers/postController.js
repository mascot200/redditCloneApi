const { response } = require('express')
const Post = require('../models/postModel')
const Comment = require('../models/commentModel')
const {monitorPostUsingHasNext, monitorCommentUsingHasNext} = require('../ChangeStream')


// @desc    Create a new post under suredit
// @route   POST /api/v1/post/
// @access  Private
const createPost = async (req, res) => {
    let { title, user_id, redit_id, body } = req.body
     try {
        const payload = {
            title,
            user_id,
            redit_id,
            body
        }
        const post = await Post.create(payload)
        res.status(200).json({ message: "Post has been created successfully", code: 200, status: 'Success', post})
        monitorPostUsingHasNext()
     } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error creating post", code: 500, status: 'Error'})
     }
}



// @desc    Add comment for a post
// @route   POST /api/v1/post/create-comment
// @access  Private
const createComment = async (req, res) => {
    let { body, user_id, post_id } = req.body
     try {
        const payload = {
            post_id,
            user_id,
            body
        }
        const comment = await Comment.create(payload)
        res.status(200).json({ message: "Comment has been created successfully", code: 200, status: 'Success', comment})
        monitorCommentUsingHasNext()
     } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error creating comment", code: 500, status: 'Error'})
     }
}



module.exports = {
    createPost,
    createComment
}
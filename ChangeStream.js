const stream = require('stream');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const mongoString = process.env.MONGO_URI
const createAudit = require('./AuditTrail')


mongoose.connect(mongoString);
const db = mongoose.connection



 const  monitorSubReditCreationUsingHasNext = async ( timeInMs = 60000, insertPipeline = [ {
    '$match': {
        'operationType': 'SubRedit',
    }
}])  => {
    const collection = db.collection("h");
    const changeStream = collection.watch(insertPipeline);
    try {
        while (await changeStream.hasNext()) {
            console.log(await changeStream.next());
            // do what you wanna do here
            let activity_type = "Insert"
            let activity_title = "A new redit has been created"
            let description = "A user has created a new redit "
            createAudit(activity_type, activity_title, description)
        }
    } catch (error) {
        if (changeStream.isClosed()) {
            console.log("The change stream is closed. Will not wait on any more changes.")
        } else {
            throw error;
        }
    }
    closeChangeStream(timeInMs, changeStream);
}


const  monitorSubReditUpdateUsingHasNext = async ( timeInMs = 60000, updatePipeline = [ {
    '$match': {
        'operationType': 'update',
    }
}])  => {
    const collection = db.collection("SubRedit");
    const changeStream = collection.watch(updatePipeline);
    try {
        while (await changeStream.hasNext()) {
            console.log(await changeStream.next());
            // do what you wanna do here
            let activity_type = "Update"
            let activity_title = "Redit has been updated"
            let description = "lorem sshhs shshs shsjsjjs"
            createAudit(activity_type, activity_title, description)
        }
    } catch (error) {
        if (changeStream.isClosed()) {
            console.log("The change stream is closed. Will not wait on any more changes.")
        } else {
            throw error;
        }
    }
    closeChangeStream(timeInMs, changeStream);
}


const  monitorPostUsingHasNext = async ( timeInMs = 60000, pipeline = [ {
    '$match': {
        'operationType': 'insert',
    }
}])  => {
    const collection = db.collection("Post");
    const changeStream = collection.watch(pipeline);
    try {
        while (await changeStream.hasNext()) {
            console.log(await changeStream.next());
            // do what you wanna do here
            let activity_type = "Insert"
            let activity_title = "Post has been inserted"
            let description = "lorem sshhs shshs shsjsjjs"
            createAudit(activity_type, activity_title, description)
        }
    } catch (error) {
        if (changeStream.isClosed()) {
            console.log("The change stream is closed. Will not wait on any more changes.")
        } else {
            throw error;
        }
    }
    closeChangeStream(timeInMs, changeStream);
}

const  monitorCommentUsingHasNext = async ( timeInMs = 60000, pipeline = [ {
    '$match': {
        'operationType': 'insert',
    }
}])  => {
    const collection = db.collection("Comment");
    const changeStream = collection.watch(pipeline);
    try {
        while (await changeStream.hasNext()) {
            console.log(await changeStream.next());
            // do what you wanna do here
            let activity_type = "Insert"
            let activity_title = "Comment has been inserted"
            let description = "lorem sshhs shshs shsjsjjs"
            createAudit(activity_type, activity_title, description)
        }
    } catch (error) {
        if (changeStream.isClosed()) {
            console.log("The change stream is closed. Will not wait on any more changes.")
        } else {
            throw error;
        }
    }
    closeChangeStream(timeInMs, changeStream);
}

const closeChangeStream = (timeInMs = 60000, changeStream) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Closing the change stream");
            changeStream.close();
            resolve();
        }, timeInMs)
    })
};


module.exports = {
    monitorSubReditCreationUsingHasNext,
    monitorSubReditUpdateUsingHasNext,
    monitorPostUsingHasNext,
    monitorCommentUsingHasNext
}
var mongoose = require('mongoose');

//Save a reference to the Schema constructor
var schema = mongoose.Schema;

//Using the Schema constrcutor, create a new UserSchema object
var ArticleSchema = mew Schema({
    //'title' is required and of type string
    title: {
        type: String,
        required: true
    },

    //'Link' is required and of type string
    link: {
        type: String,
        required: true
    },

    //'note' is an object that stores a Note id
    //The ref property links the ObjectID to the Note model
    
})
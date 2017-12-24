var mongoose = require('mongoose');

//Save a reference to the Schema contructor
var Schema = mongoose.Schema;

//Using Schema constructor, create a new NoteSchema object
//This is similar to a Sequelize model

var NoteSchema = new Schema({
    //'title' is of type string
    title: String,
    //'body' is of type String
    body: String
});

//This creates our model from the above Schema, using mongoose's model method
var Note = mongoose.model('Note', NoteSchema);

//Export the Note model
module.exports = Note;
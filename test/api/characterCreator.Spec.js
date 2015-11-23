/* i will test some stuff*/
var mongoose = require("mongoose"),
  schema     = mongoose.Schema();

  var CharacterSchema = new Schema({
      name: String,
      race: RACES,
      class: CLASSES,
      background: String,

  });

module.exports = mongoose.model("Character", CharacterSchema);

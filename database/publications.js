const mongoose = require("mongoose");

//create publications schema
const PublicationSchema = mongoose.Schema({
    name: String,
    books: [String]
});

const PublicationModel = mongoose.model("publications", PublicationSchema);

module.exports = PublicationModel;
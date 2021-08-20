const mongoose = require('mongoose')
// used for ----
const PostBoxes = mongoose.Schema({
    name: string,
})

module.exports = mongoose.model("PostBoxes",PostBoxes)
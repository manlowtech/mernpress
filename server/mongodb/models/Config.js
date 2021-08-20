const mongoose = require('mongoose')
// used for ----
const Configs = mongoose.Schema({
    name:{
        type:string
    },
    role:{
        type:string
    },
    status:{
        type:string
    },
    slug:{
        type:string
    }
})

module.exports = mongoose.model("Config",Configs)
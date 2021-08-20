const mongoose = require('mongoose')
// used for ----
const Mern_Options = mongoose.Schema({
    opt_name: string,
    
      
    slug: {
      type: string
    },
    
    opt_value: {
      type:string
    },
    
    parent: {
      type: string
    },
    
    opt_content: {
      type: string
    },
})

module.exports = mongoose.model("Mern_Options",Mern_Options)
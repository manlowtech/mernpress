const mongoose = require('mongoose')
// used for ----
const Menus = mongoose.Schema({
    name: string,
    
      
    slug: {
      type: string
    },
    
    parent_slug: {
      type:string
    },
    
    component: {
      type: string
    },
    
    role: {
      type: string
    },
})

module.exports = mongoose.model("Menus",Menus)
const mongoose = require('mongoose')
// used for ----
const Users = mongoose.Schema({
    name: {
        type:string
      },
      
      email: {
        type: string
      },
      
      username: {
        type: string
      },
      
      password: {
        type:string
      },
      
      role: {
        type: string
      },
      
      status: {
        type: string
      },

})

module.exports = mongoose.model("Users",Users)
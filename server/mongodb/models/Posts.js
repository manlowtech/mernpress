const mongoose = require('mongoose')
// used for ----
const Posts = mongoose.Schema({
   
    title:  {
        type: string
      },
      
      author: {
        type: string
      },
      post_content: {
        type:string
      },
      post_type: {
        type: string
      },
      post_status: {
        type: string
      },
      post_category: {
        type: string
      },
      mime_type: {
        type:string
      },
})

module.exports = mongoose.model("Posts",Posts)
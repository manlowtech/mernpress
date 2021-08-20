module.exports = (mongoose,url,options)=>{
    mongoose.connect(url,options)
    mongoose.connection.once("open",()=>console.log("mogodb connected successfully"))
}
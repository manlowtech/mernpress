const Cat = require('../models').Mern_Options;

module.exports = {
    create(req,res){
        return Cat
        .create({
            slug : "category",
            opt_name : req.body.catname,
            opt_content : req.body.catdescription,
        }).then(ress=>{
            return res.status(200).json({success:true,data:ress.data,})
        }).catch(err=> res.status(400).json({success:false, err :err,}))

    },
    findAll(req,res){
        return Cat
        .findAll({
            where : {
                slug : "category"
            }
        }).then(ress=> res.status(200).json({success:true, cats:ress}))
          .catch(err=> res.status(400).json({success:false, err :err,}))
    }
}
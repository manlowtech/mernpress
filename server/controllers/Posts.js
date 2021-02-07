const Posts = require('../models').Posts;
module.exports = {
    create(req,res){
        return Posts
        .create({
            title : req.body.title, 
            post_content : req.body.post_content,
            post_type : req.body.post_type,
        }).then(t=>res.status(200).send(t))
        .catch(err => res.status(400).send(err));
    },
    findAll(req,res){
        return Posts
        .findAll({
            where : {
                post_type : "post",
            }
        }).then(data=> res.status(200).json({success:true, posts : data,}))
        .catch(err=>res.status(400).json({err : err}));
    },
    findAllPages(req,res){
        return Posts
        .findAll({
            where : {
                post_type : "page",
            }
        }).then(data=> res.status(200).json({success: true , pages : data ,}))
        .catch(err=> res.status(400).json({err : err}));
    }
}
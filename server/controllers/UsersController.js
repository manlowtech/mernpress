const Users = require('../models').Users;
module.exports = {
    create(req,res){
        return Users
        .create({
            name : req.body.name,
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role,
            status : req.body.status,

        }).then(data=>res.status(200).json({success:true,register:data}))
        .catch(err=>res.status(400).json({success:false,err}));
    },
    findAll(req,res){
       return  Users
       .findAll({
            where:{
                username: req.body.username,
               password:req.body.password,
            }
        }).then(dat=>res.status(200).json({success:true,loginInfo:dat,}))
        .catch(err=>res.status(400).json({success:false,err}));
    },
}
const Users = require('../models').Users;
const bcrypt = require('bcrypt');
module.exports = {
    create(req, res) {
        // let pass = '';
        Users.findOne({where:{
            email:req.body.email
        }}).then(user=>{
            if(!user){
                  
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                // Store hash in your password DB.
                console.log(hash);
                return Users
                    .create({
                        name: req.body.name,
                        username: req.body.username,
                        email: req.body.email,
                        password: hash,
                        role: req.body.role,
                        status: req.body.status,

                    }).then(data=>res.status(200).json({register:data,success:true,}))
                    .catch(err => res.status(400).json({ success: false, err }));

            });
        });
            }else{
             return res.status(200).json({err:"User Already Exisits",success:false});
            }
        }).catch(err=>res.status(400).json({err}));

    },
    findAll(req, res) {
        return Users
            .findOne({
                where: {
                    email : req.body.email,
                }
            }).then(user => {
                if(user){
                    if(bcrypt.compareSync(req.body.password,user.password)){
                        return res.status(200).json({success:true,login:user})
                    }else{
                        return res.status(400).json({err:"User not fount",success:false})
                    }
                }
            }).catch(err=>res.status(400).json({err}));
    },
}
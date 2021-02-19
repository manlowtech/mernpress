const Menus = require('../models').Menus;


module.exports = {
    create(req,res){
    return Menus.create({
        name : req.body.name,
        parent_slug :req.body.slug,
        component:req.body.component,
        role:req.body.role,
    }).then(dat=>res.status(200).json({success:true,data:dat})).catch(err=>console.log(err));
    },
    findAllMenus(req,res){
       // let children = {};
       Menus.findAll({
            where:{
                role: "submenupage",
            }
        }).then(data=> {
            if(data){
                return
                Menus.findAll({
                    where:{
                        role : "dashboardmenupage",
                    }
                }).then(dat=>res.status(200).json({
                    menus:{
                        main:dat,
                        child:data,
                    }
                })).catch(err=>console.log(err));
            }
        })
        .catch(err=>console.log(err));
       
    }
}
const Menus = require('../models').Menus;


module.exports = {
    create(req,res){
    return Menus.create({
        name : req.body.name,
        slug:req.body.slug,
        parent_slug :req.body.parent_slug,
        component:req.body.component,
        role:req.body.role,
    }).then(dat=>res.status(200).json({success:true,data:dat})).catch(err=>console.log(err));
    },
    findAllMenus(req,res){
      // let children = {};
       Menus.findAll({
            where:{
                role: "submenupage",
                role : "dashboardmenupage",
            }
        }).then(data=> res.status(200).json({success:true,adminMenus:data}))
        .catch(err=>console.log(err));
       
    },
    findWidgetMenus(req,res){
      return   Menus.findAll({
             where:{
                 role: "clientmenu"
             }
         }).then(menu=>{
             if(menu){
                 return res.status(200).json({success:true,clientMenus:menu})
             }
             return res.status(400).json({success:false})
         }).catch(err=>console.log(err));
    },
    
    updateWidgetMenus(req,res){
        Menus.update(req.body,{
            where:{
                id:req.params.menu_id,
            }
        }).then(rest=>res.json({success:true,data:test}))
        .catch(err=>console.log(err));
    }
}
const Menus = require('../models').Menus;
//done

module.exports = {
    create(req,res){
    return Menus.create({
        name : req.body.name,
        parent_slug :req.body.slug,
        component:req.body.component,
        role:req.body.role,
    },(err,result)=>{
        if(err) return res.status(400).json({err})
        return res.status(200).json({data:result,success:true})
    })
    },
    findAllMenus(req,res){
       // let children = {};
       Menus.find({
                role: "submenupage",
                role : "dashboardmenupage",
       },(err,result)=>{
        if(err) return res.status(400).json({err})
        return res.status(200).json({adminMenus:result,success:true})
    })
    },
    findWidgetMenus(req,res){
      return   Menus.find({
             where:{
                 role: "clientmenu"
             }
         },(err,result)=>{
            if(err) return res.status(400).json({err})
            return res.status(200).json({clientMenus:result,success:true})
        })
    },
    
    updateWidgetMenus(req,res){
        Menus.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
            if(err) return console.log("failed...")
            return res.status(200).json({success:true})
        })
    }
}
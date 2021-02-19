const Config = require('../models').Config;
const fs = require('fs');
const path = require('path');
//const basename = path.basename(__filename);
module.exports = {
    create(req,res){
//read themes directory and install foldernames in the Database
        fs
        .readdir('../src/Themes',(err,files)=>{
           console.log(files);
           files.filter(file => {
            console.log(file);        
          return (file.indexOf('.') !== 0) && (file.slice(-3) !== '.js');
        })
        .forEach(file => {
         // const theme = require(path.join('../../src/Themes', file));
         Config.findOne({
             where:{
                 name:file,
                 role:"theme",
                 
             }
         }).then(theme=>{
             if(!theme){
                return Config
                .create({
                    name:file ,
                    role: "theme",
                    status: "installed",
                    slug:`../../../../../Themes/${file}/cover.jpg`,
                })
               
             }else{
                 return;
             }
         }).catch(err=>console.log(err));
       /*  fs.readdir(`../src/Themes/${file}`,(err,files)=>{
             files.forEach(file=>{
                const coverImagePath = `/Themes/${file}/cover.png`;
                const ConfigFilePath = `/Themes/${file}/${file}.js`;
             })
            
         });  */
        })
        })//end read dir
    
    },
    findAll(req,res){
        return Config
        .findAll({
            where:{
                role: "theme",
            }
        }).then(data=> res.status(200).json({success:true,themes:data}))
        .catch(err=>console.log(err));
    },
    findActiveTheme(req,res){
        return Config
        .findOne({
            where:{
                role:"theme",
                status:"active",
            }
        }).then(theme=>{
            if(theme){
                return res.status(200).json({success:true,activeTheme:theme})
            }else{
                return res.json({success:false})
            }
        })
        .catch(err=>res.status(400).json({err}));
    },
    Activatetheme(req,res){
        Config.findOne({
            where:{
                status:"active",
            }
        }).then(activetheme=>{
            if(activetheme){
                Config.update({
                    name:activetheme.name,
                    role:activetheme.role,
                    status:"installed",

                },{where:{
                    id:activetheme.id,
                }}).then(deact=>res.status(200).json({deactSuccess:true,msg:`${deact.name} was deactivated`})).catch(err=>console.log(err));
            }
            if(!activetheme){
                //update
            }
        })
        .catch(err=>console.log(err));
       return Config.update(req.body,{
           where:{
               id:req.body.id,
           }
       }).then(done=>res.status(200).json({success:true,msg:`${done.name} successfully ACTIVATED`})).catch(err=>console.log(err));
    }
}
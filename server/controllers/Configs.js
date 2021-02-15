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
                 slug:file,
             }
         }).then(theme=>{
             if(!theme){
                return Config
                .create({
                    name:file ,
                    role: "theme",
                    status: "installed",
                    slug:file,
                })
               
             }else{
                 return;
             }
         }).catch(err=>console.log(err));
         fs.readdir(`../src/Themes/${file}`,(err,files)=>{
             files.forEach(file=>{
                const coverImagePath = `/Themes/${file}/cover.png`;
                const ConfigFilePath = `/Themes/${file}/${file}.js`;
             })
            
         });
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
    }
}
const Posts = require('../models').Posts;
//const Post = require('../models')
const multer = require('multer');
const path = require('path');
module.exports = {
    create(req, res) {
        return Posts
            .create({
                title: req.body.title,
                post_content: req.body.post_content,
                post_type: req.body.post_type,
                post_category: req.body.category,
            },(err,result)=>{
                if(err) return res.status(400).json({err:err,msg:"not_created"})
                return res.status(200).json({data:result})
            })
    },
    findAll(req, res) {
        return Posts
            .find({        
                    post_type: "post",
            },(err,result)=>{
                if(err) return res.status(400).json({err:err,msg:"not_created"})
                return res.status(400).json({posts:result,msg:"success"})
            })
    },
    findAllPages(req, res) {
        return Posts
            .find({
                    post_type: "page",
                
            },(err,result)=>{
                if(err) return res.status(400).json({err:err,msg:"not_created"})
                return res.status(400).json({pages:result,success:true})
            })
    },
    findOnePost(req, res) {
        return Posts
            .findById({
                    _id: req.params.post_id,
                
            },(err,result)=>{
                if(err) return res.status(400).json({err:err,msg:"not_created"})
                return res.status(400).json({post:result,success:true})
            })
    },
    updatePost(req, res) {
        return Posts.findByIdAndUpdate({_id: req.params.post_id,},req.body,(err,result)=>{
            if(err) return res.status(400).json({err:err,msg:"not_created"})
            return res.status(400).json({post:result,success:true})
        })
    },
    uploadImage(req, res) {
        var storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'uploads/');
            },
            filename: (req, file, cb) => {
                cb(null, `${Date.now}_${file.originalname}`)
            },
            fileFilter: (req, file, cb) => {
                const ext = path.extname(file.originalname);
                if (ext !== '.jpg' || ext !== '.png' || ext !== '.jpeg') {
                    return cb(res.status(400).end('only images allowed'), false);
                }
                cb(null,true);
            }
        });
        var upload = multer({ storage: storage }).single('post_thumbnail');
        upload(req, res, err => {
            if (err) {
                return res.status(400).json({ success: false })
            }
            console.log(res.req.file);
            return res.status(200).json({ success: true, Image: res.req.file.path, });
        });
    },
}
const Posts = require('../models').Posts;
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
            }).then(t => res.status(200).send(t))
            .catch(err => res.status(400).send(err));
    },
    findAll(req, res) {
        return Posts
            .findAll({
                where: {
                    post_type: "post",
                }
            }).then(data => res.status(200).json({ success: true, posts: data, }))
            .catch(err => res.status(400).json({ err: err }));
    },
    findAllPages(req, res) {
        return Posts
            .findAll({
                where: {
                    post_type: "page",
                }
            }).then(data => res.status(200).json({ success: true, pages: data, }))
            .catch(err => res.status(400).json({ err: err }));
    },
    findOnePost(req, res) {
        return Posts
            .findOne({
                where: {
                    id: req.params.post_id,
                }
            }).then(post => res.status(200).json({ success: true, post: post }))
            .catch(err => console.log(err));
    },
    updatePost(req, res) {
        return Posts.update(req.body, {
            where: {
                id: req.params.post_id,
            }
        }).then(result => res.status(200).json({ success: true, post: result }))
            .catch(err => console.log(err));
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
const PostsController = require('../controllers').Posts;
const CatController = require('../controllers').Cat;

module.exports = (app)=>{
    // ======ALL POSTS ROUTES ====//
    app.post('/posts/create',PostsController.create);
    app.post('/posts/createpage',PostsController.create)
    app.get('/posts/allposts',PostsController.findAll);
    app.get('/posts/allpages',PostsController.findAllPages);

    //==== ALL CATEGORY AND TAGS ROUTES ====//
    app.post('/cat/createcat',CatController.create);
    app.get('/cat/allcats',CatController.findAll);

}
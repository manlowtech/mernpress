const PostsController = require('../controllers').Posts;

module.exports = (app)=>{
    app.post('/posts/create',PostsController.create);
    app.post('/posts/createpage',PostsController.create)
    app.get('/posts/allposts',PostsController.findAll);
    app.get('/posts/allpages',PostsController.findAllPages);

}
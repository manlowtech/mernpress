const PostsController = require('../controllers').Posts;
const CatController = require('../controllers').Cat;
const configs = require('../controllers').Configs;
const Menus = require('../controllers').Menus;
const UsersCont = require('../controllers').Users;
module.exports = (app) => {
  
    //Activate THEME
    app.post('/themes/activate',configs.Activatetheme);
//=== GET AN ACTIVE THEME FROM DB =====.>//
app.get('/themes/getactivetheme',configs.findActiveTheme);
    //=====REGISTERING AND LOGGING USERS
    app.post('/users/register', UsersCont.create);
    app.post('/users/login', UsersCont.findAll);
    //app.post('/users/register',Users.create);
    //app.get('/users/login',Users.findAll);
///======= POST THUMBNAIL DATAS....////
     app.post('/posts/uploadImage',PostsController.uploadImage);
    // ======ALL POSTS ROUTES ====//
    app.post('/posts/create', PostsController.create);
    app.post('/posts/createpage', PostsController.create)
    app.get('/posts/allposts', PostsController.findAll);
    app.get('/posts/allpages', PostsController.findAllPages);
      //getPost for Edit
    app.get('/posts/getpost/:post_id',PostsController.findOnePost);
    app.put('/posts/update/:post_id',PostsController.updatePost);

    //==== ALL CATEGORY AND TAGS ROUTES ====//
    app.post('/cat/createcat', CatController.create);
    app.get('/cat/allcats', CatController.findAll);

    //CREATING THEMES AND ADDONS
    //THEMES
    app.post('/themes/init', configs.create);
    //get all themes
    app.get('/themes/allthemes', configs.findAll);

    //MENUS APIS HERE
    app.get('/menu/alldashboardmenupages', Menus.findAllMenus);
    //ADDMENU PAGE
    app.post('/menu/addmenupage', Menus.create);
    app.post('/menu/addsubmenupage', Menus.create);

}
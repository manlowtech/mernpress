const PostsController = require('../controllers').Posts;
const CatController = require('../controllers').Cat;
const configs = require('../controllers').Configs;
const Menus = require('../controllers').Menus;
const UsersCont = require('../controllers').Users;
module.exports = (app) => {
  

    //===ADDDONNNS====//
    app.get('/addon/getalladdons',configs.findAllAddons);
    app.post('/addon/createaddon',configs.createAddon);
    app.put('/addon/activate/:addon_id',configs.ActivateAddon);

}
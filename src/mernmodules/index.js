import { insertLogo,getTheLogo,deleteLogo,updateLogo } from "./CommonOptions";
import { getActiveTheme,getAllAddons,getThemes,createAddon,ActivateAddon,deactivateAddon,deleteAddon,ThemeInit } from "./ConfigsInit";
import {getPages,getPosts,createPage,insertPost,updatePost,deletePage,deletePost  } from "./PostModule";
import { getCategories,getTags,createCategory,deleteCategory,deleteTag,updateCategory,updateTag } from "./Taxonomies";
import { Login,Register } from "./Login";
import { addField,getField,deleteField,updateField } from "./PostBoxFields";
import { getMenuPages,getWidgetMenus,addMenuPage,addSubMenuPage,updateWidgetMenus,deleteMenuPages } from "./DashMenuPages";


export {insertLogo,getTheLogo,deleteLogo,updateLogo,getActiveTheme,getAllAddons,getThemes,createAddon,ActivateAddon,deactivateAddon,deleteAddon,ThemeInit,getPages,getPosts,createPage,insertPost,updatePost,deletePage,deletePost,Login,Register,addField,getField,deleteField,updateField,getMenuPages,getWidgetMenus,addMenuPage,addSubMenuPage,updateWidgetMenus,deleteMenuPages}

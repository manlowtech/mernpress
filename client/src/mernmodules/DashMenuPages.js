import axios from 'axios';
export const getWidgetMenus = async()=>{
    const menus = await axios.get('/menu/widgetmenus');
    return menus.data.clientMenus;

}
export const updateWidgetMenus =async(menuobj)=>{
    const update = await axios.put('/menu/update/:menu_id',menuobj);
    return update.data.data;
}
export const addMenuPage = async (name,slug,component,role="dashboardmenupage")=>{
const url = '/menu/addmenupage';
const variables = {
    name : name,
    slug :slug,
    component:component,
    role:role,
    parent_slug:"iam"

}
const page = await axios.post(url,variables);
return page.data.data;
}

export const addSubMenuPage = async (parent_slug,name,slug,component,role="submenupage")=>{
    const url = '/menu/addsubmenupage';
    const variables = {
        parent:parent_slug,
        name : name,
        slug :slug,
        component:component,
        role:role,
    
    }
    const page = await axios.post(url,variables);
    return page.data.data;
}

export const getMenuPages = async ()=>{
    const url = '/menu/alldashboardmenupages';
    const data = await axios.get(url);
    console.log(data.data);
    return data.data.adminMenus;
}

export const deleteMenuPages = async (id)=>{
    await axios.delete(id);
}
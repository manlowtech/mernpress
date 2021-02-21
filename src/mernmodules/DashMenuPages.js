import axios from 'axios';

export const addMenuPage = async (name,slug,component,role="dashboardmenupage")=>{
const url = '/menu/addmenupage';
const variables = {
    name : name,
    slug :slug,
    component:component,
    role:role,

}
const page = await axios.post(url,variables);
return page;
}

export const addSubMenuPage = async (parent,name,slug,component,role="submenupage")=>{
    const url = '/menu/addsubmenupage';
    const variables = {
        parent:parent,
        name : name,
        slug :slug,
        component:component,
        role:role,
    
    }
    const page = await axios.post(url,variables);
    return page;
}

export const getMenuPages = async ()=>{
    const url = '/menu/alldashboardmenupages';
    const data = await axios.get(url);
    console.log(data.data);
    return data.data;
}

export const deleteMenuPages = async (id)=>{
    await axios.delete(id);
}
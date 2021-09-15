import axios from 'axios';
export const getAllAddons = async()=>{
    const all = await axios.get('/addon/getalladdons');
    return all.data.allAddons;
}
export const createAddon = async()=>{
    const ads = await axios.post('/addon/createaddon');
    return ads.data;

}

export const ActivateAddon = async(obj)=>{
    const ads = await axios.put(`/addon/activate/${obj.addon_id}`,obj);
    return ads.data;
}
export const deactivateAddon = async(obj)=>{
    const ads = await axios.put(`/addon/deactivate/${obj.addon_id}`);
    return ads.data;
}
export const deleteAddon = async()=>{
    const ads = await axios.delete();
    return ads.data;
}
export const getActiveTheme = async()=>{
    const theme = await axios.get('/themes/getactivetheme');
    return theme.data;
}
export const ThemeInit = async()=>{
    const vars = {
        name : "name",
    }
    const inits = await axios.post('/themes/init',vars);

    return inits;
}

export const getThemes = async ()=>{
    const themes = await axios.get('/themes/allthemes');
    return themes.data;
}
import axios from 'axios';
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
import axios from 'axios';

export const ThemeInit = async()=>{
    const vars = {
        name : "name",
    }
    const inits = await axios.post('/themes/init',vars);

    return inits;
}

export const getThemes = async ()=>{
    const data = await axios.get('/themes/allthemes');
    return data.themes;
}
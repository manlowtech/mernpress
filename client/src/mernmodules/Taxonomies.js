import axios from 'axios';

export const getCategories = async ()=>{
    const url = '/cat/allcats';
const response = await axios.get(url);
return response.data.cats;
}
export const createCategory = async (cat)=>{
    const url = '/cat/createcat';
    const variable = {
        catname : cat.catname,
        catdescription : cat.catdescription,
    }
    const response = await axios.post(url,variable);
    return response.data;
}
export const deleteCategory = async (id)=>{

}
export const updateCategory = async (id)=>{

}

//Tags
export const getTags = async ()=>{

}
export const deleteTag = async (id)=>{

}
export const updateTag = async (id)=>{
    
}
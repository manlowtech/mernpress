import axios from 'axios';

export const getPosts = async (post_type = "post")=>{
    const url = `/allposts/${post_type}`;
    const response = await axios.get(url);
    return response.data.posts;
}
export const insertPost = async (post,post_type = "post")=>{
    const url = '/posts/create';
    const variable = {
        post_type = post_type,
        title : post.title, 
        post_content : post.post_content,
    }
    const response = await axios.post(url,variable);
    return response.data;
}
export const updatePost = async ()=>{

}
export const getPages = async ()=>{

}
export const createPage = async ()=>{
   
}
export const deletePage = async (id)=>{

}
export const deletePost = async (id)=>{
    const url = `/posts/delete/${id}`;
    

}



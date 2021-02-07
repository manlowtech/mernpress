import axios from 'axios';

export const getPosts = async ()=>{
    const url = '/posts/allposts';
    const response = await axios.get(url);
    return response.data.posts;
}
export const updatePost = ()=>{

}
// postLink ,, InsertPosts,, AddCategory ,, AddTag, GetTags,GetCategories,HavePosts,.. AddMenuPage,Submenu,
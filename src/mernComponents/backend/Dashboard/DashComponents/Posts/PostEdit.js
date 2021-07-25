import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styles from './AddPost.module.css';
import {TextField,List,ListItem,Button,Snackbar,Skeleton} from '@material-ui/core';
import CatSelect from './catselect/CatSelect';
//const AddThumbnail = 'AddThumbnail';
import MediaModal from '../misc/mediaModal/MediaModal' ;
//import Media from './SkeletonCard';
function PostEdit(props) {
    const [success,setSuccess] = useState(false);
    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('Uncategorized');
    const [Post,setPost] = useState([]);
    const [description,setDescription] = useState('');
    const handleInputChange = (e)=>{
        setTitle(...title,e.target.value);
        
    }
    useEffect(()=>{
      const post_id = props.match.params.post_id;
      const getPost = async()=>{
          const vars ={
              id:post_id,
          }
        const posts = await  axios.get(`/posts/getpost/${post_id}`,vars);
        
 setTitle( posts.data.post.title );
 //setTitle( posts.data.post.post_content );
 setCategory( posts.data.post.post_category );
 setDescription( posts.data.post.post_content );
       console.log( posts.data.post.post_content );
       console.log(post_id);


      }
      getPost();
    },[]);
   
    const handleCatChange= (catname)=>{
        console.log(catname);
        setCategory(catname);
    }
    const handleClose = ()=>{
        setSuccess(false);
    }
    const successMsg = <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
    <div onClose={handleClose} severity="success">
      This is a success message!
    </div>
  </Snackbar>;
    const handlePostSubmit = async (e)=>{
        const post_id = props.match.params.post_id;
        e.preventDefault();
        const variable = {
            post_content : description,
            title : title,
            post_type : "post",
            category:category,
        }
          await axios.put( `/posts/update/${post_id}`,variable)
            .then(res=> console.log(res));
            setSuccess(true);
            setTitle('');
            setDescription('');
            setPost([]);

    }
    return (
        <div className={styles.container}>
      {description ?
      <div>
      <div className={styles.leftpost}>
      {success && (successMsg)}
     
      <TextField
         id="post-title"
         label="Add Title"
         placeholder= "Enter title here....."
         value={title}
         onChange={handleInputChange}
         />
         <TextField 
         multiline
         rows ={5}
         label= "Add Description"
         placeholder = "enter description here..."
         value={description}
         onChange={e=>setDescription(...description,e.target.value)}
         />
      <Button disabled={!title || !description} onClick={handlePostSubmit} color="secondary" variant="contained">Submit Post</Button>
      </div>

<div className={styles.rightPane}>
<List>
    <ListItem button><CatSelect handleCatChange={handleCatChange} /></ListItem>
    <ListItem button><MediaModal/></ListItem>
    <ListItem button>Templates</ListItem>
    <ListItem button>Type</ListItem>
    <ListItem button>Thumbnail</ListItem>
</List>
</div>
    </div>

         : "Loading...."}
           
     </div>
    	
    );
   
}

export default PostEdit;

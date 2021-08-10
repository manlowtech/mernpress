import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {EditorState,convertFromRaw,convertToRaw} from 'draft-js'
import Editor from './MernEditor'
import {TextField,List,ListItem,Button,Snackbar,Skeleton} from '@material-ui/core';
import CatSelect from './catselect/CatSelect';
//const AddThumbnail = 'AddThumbnail';
import MediaModal from '../misc/mediaModal/MediaModal' ;
//import Media from './SkeletonCard';
import styles from './AddPost.module.css';
function PostEdit(props) {
    const [success,setSuccess] = useState(false);
    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('Uncategorized');
    const [Post,setPost] = useState([]);
    const [content,setContent] = useState('')
    const [editorState,setEditorState] = useState(()=>EditorState.createWithContent(JSON.parse(convertFromRaw(content))));
    const handleInputChange = (e)=>{
        setTitle(e.target.value);
        
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
 setContent( posts.data.post.post_content );
       console.log( posts.data.post.post_content );
       console.log(post_id);


      }
      getPost();
    },[]);
   
    const handleCatChange= (catname)=>{
        console.log(catname);
        setCategory(catname);
    }
    //const handleDescChange

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
            post_content : JSON.stringify(convertToRaw(editorState.getCurrentContent())),
            title : title,
            post_type : "post",
            category:category,
        }
          await axios.put( `/posts/update/${post_id}`,variable)
            .then(res=> console.log(res));
            setSuccess(true);
            setTitle('');
            setPost([]);

    }
    return (
        <div className={styles.container}>
      {title ?
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
         <Editor 
         EditorState={editorState}
         onEditorStateChange={(editorState=>setEditorState(editorState))}
         />
      <Button disabled={!title || !editorState} onClick={handlePostSubmit} color="secondary" variant="contained">Submit Post</Button>
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

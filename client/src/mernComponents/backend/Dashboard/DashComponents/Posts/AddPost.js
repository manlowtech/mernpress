import React,{useState} from 'react';
import axios from 'axios';
import styles from './AddPost.module.css';
import {TextField,List,ListItem,Button,Snackbar} from '@material-ui/core';
import CatSelect from './catselect/CatSelect';
import {EditorState} from 'draft-js'
import {convertToRaw} from 'draft-js'
import Editor from './MernEditor'
import MediaModal from '../misc/mediaModal/MediaModal' ;
function AddPost() {
    const [success,setSuccess] = useState(false);
    
    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('Uncategorized');
    const [Post,setPost] = useState([]);
    const [editorState,setEditorState] = useState(()=>EditorState.createEmpty());
    const handleInputChange = (e)=>{
        setTitle(e.target.value);
        
    }
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
        e.preventDefault();
        const variable = {
             post_content : JSON.stringify(convertToRaw(editorState.getCurrentContent())),
            title : title,
            post_type : "post",
            category:category,
        }
          await axios.post('/posts/create',variable)
            .then(res=> console.log(res));
            setSuccess(true);
            setTitle('');
            setPost([]);

    }
    return (
        <div className={styles.container}>
        
        <div className={styles.leftpost}>
        {success && (successMsg)}
        {Post}
        <TextField
           id="post-title"
           label="Add Title"
           placeholder= "Enter title here....."
           value={title}
           onChange={handleInputChange}
           />
           <Editor
             EditorState={editorState}
             wrapperClassName="editor"
             onEditorStateChange={editorState=>setEditorState(editorState)}
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
    )
}

export default AddPost;

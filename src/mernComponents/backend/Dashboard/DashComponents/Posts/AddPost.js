import React,{useState} from 'react';
import axios from 'axios';
import styles from './AddPost.module.css';
import {TextField,List,ListItem,Button,Snackbar} from '@material-ui/core';
function AddPost() {
    const [title,setTitle] = useState('');
    const [success,setSuccess] = useState(false);
    const [Post,setPost] = useState([]);
    const [description,setDescription] = useState('');
    const handleInputChange = (e)=>{
        setTitle(e.target.value);
        
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
            post_content : description,
            title : title,
            post_type : "post",
        }
          await axios.post('/posts/create',variable)
            .then(res=> console.log(res));
            setSuccess(true);
            setTitle('');
            setDescription('');
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
           <TextField 
           multiline
           rows ={5}
           label= "Add Description"
           placeholder = "enter description here..."
           value={description}
           onChange={e=>setDescription(e.target.value)}
           />
        <Button onClick={handlePostSubmit} color="primary" variant="contained">Submit Post</Button>
        </div>


        <div className={styles.rightPane}>
        <List>
            <ListItem button>Categories</ListItem>
            <ListItem button>Media</ListItem>
            <ListItem button>Templates</ListItem>
            <ListItem button>Type</ListItem>
            <ListItem button>Thumbnail</ListItem>
        </List>
        </div>
            
        </div>
    )
}

export default AddPost;

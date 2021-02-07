import React,{useState} from 'react';
import axios from 'axios';
import styles from './AddPage.module.css';
import {TextField,List,ListItem,Button,Snackbar} from '@material-ui/core';
function AddPage() {
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
      Page Created !
    </div>
  </Snackbar>;
    const handlePostSubmit = async (e)=>{
        e.preventDefault();
        const variable = {
            post_content : description,
            title : title,
            post_type : "page",
        }
          await axios.post('/posts/createpage',variable)
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
           id="page-title"
           label="Add Page Title"
           placeholder= "Enter page title here...."
           value={title}
           onChange={handleInputChange}
           />
           <TextField 
           multiline
           rows ={5}
           label= "Add Page Description"
           placeholder = "enter page description here..."
           value={description}
           onChange={e=>setDescription(e.target.value)}
           />
        <Button onClick={handlePostSubmit} color="primary" variant="contained">Submit Page</Button>
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

export default AddPage;

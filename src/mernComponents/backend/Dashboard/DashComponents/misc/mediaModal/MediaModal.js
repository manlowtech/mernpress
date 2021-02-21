import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
//import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Button,Paper } from '@material-ui/core/';
import styles from './MediaModal.module.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddThumbbail from '../AddThumbnail';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
}));


function MediaModal() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const onDrop = (files) => {
    console.log(files);
    let formData = new formData();
    const config ={
      headers: {
        'content-type':'multipart/form-data',
      }//end headers
    }//end config
    formData.append('post_thumbnail',files[0]);
    axios.post('/posts/uploadImage',formData,config).then(response=>{
      if(response.data.success){
        alert('image uploades successfully');
        console.log(response.data);
      }else{
        alert('there was an error uploading your image');
      }
    });
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button color="secondary" variant="outlined" onClick={() => setOpen(true)}>Add Thumbnail</Button>
      <form>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={styles.modalHeight}

      >
        <Paper className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Upload Media" {...a11yProps(0)} />
              <Tab label=" Media Gallery" {...a11yProps(1)} />
              <Tab label=" Contact" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <AddThumbbail onDrop={onDrop} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Media Gallery
      </TabPanel>
          <TabPanel value={value} index={2}>
            Contact
      </TabPanel>
      <div>
          <Button color="error" variant="outlined" onClick={() => setOpen(false)} >Close Modal</Button>
        </div>
        </Paper>
       
      </Modal>
      </form>
    </div>
  );
}

export default MediaModal;

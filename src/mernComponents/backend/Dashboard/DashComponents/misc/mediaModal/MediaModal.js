import React,{useState} from 'react'
import Modal from '@material-ui/core/Modal';
//import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Button} from '@material-ui/core/';
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
      backgroundColor: theme.palette.background.paper,
    },
  }));


function MediaModal() {
    const classes = useStyles();
  const [value, setValue] = useState(0);
  
  const onDrop = (files)=>{
    console.log(files);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const [open,setOpen] = useState(false);
    return (
        <div>
          <Button color="secondary" variant="outlined" onClick={()=>setOpen(true)}>Add Thumbnail</Button>
            <Modal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
            >
            <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Upload Media" {...a11yProps(0)} />
          <Tab label=" Media Gallery" {...a11yProps(1)} />
          <Tab label=" Contact" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <AddThumbbail onDrop={onDrop}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      Media Gallery
      </TabPanel>
      <TabPanel value={value} index={2}>
        Contact
      </TabPanel>
    </div>
    <div>
      <Button color="error" variant="outlined" onClick={()=>setOpen(false)} >Close Modal</Button>
    </div>
            </Modal>
        </div>
    );
}

export default MediaModal;

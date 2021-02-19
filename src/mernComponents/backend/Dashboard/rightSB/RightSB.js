import React from 'react';
import NavBar from '../NavBar';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './RightSB.module.css';
import AddPost from '../DashComponents/Posts/AddPost';
import AllPosts from '../DashComponents/Posts/AllPosts';
import PostsCats from '../DashComponents/Posts/PostsCats';
import AddPages from '../DashComponents/Pages/AddPage';
import AllPages from '../DashComponents/Pages/AllPages';
import AllThemes from '../DashComponents/Themes/AllThemes';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div className={styles.container}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};





function RightSB({value,menuname}) {
  return (
    <div className={styles.container}>
      <NavBar/>
      {menuname === "AllPosts" && (<AllPosts/>)  }
      {menuname === "AddNewPost" && (<AddPost/>)  }
      {menuname === "Categories" && (<PostsCats/>)  }
      {menuname === "AddNewPage" && (<AddPages/>)  }
      {menuname === "AllPages" && (<AllPages/>)  }
      {menuname === "AllThemes" && (<AllThemes/>)  }
      
      <TabPanel value={value} index={3}>
      <AddPost/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  )
}

export default RightSB;

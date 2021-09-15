import React,{lazy} from 'react';
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





function RightSB({menuname,admin}) {
  const RenderComp = ()=>{
    admin.filter(file=>file.slug === menuname).forEach(el => {
      const RenderC = lazy(()=>import(`../../../../${el.component}`))
      return <RenderC/>
    });
  }
  return (
    <div className={styles.container}>
    {menuname === "AddNewPost" && <AddPost/>}
    {menuname === "Categories" && <PostsCats/>}
    {menuname === "Tags" && <AddPost/>}
    {menuname === "AllPosts" && <AllPosts/>}
    {menuname === "Posts" && <AllPosts/>}
    {menuname === "AllPages" && <AllPages/>}
    {menuname === "AddNewPage" && <AddPages/>}
    {menuname === "AllThemes" && <AllThemes/>}
    {menuname === "Pages" && <AllPages/>}
    <RenderComp/>
    </div>
  )
}

export default RightSB;

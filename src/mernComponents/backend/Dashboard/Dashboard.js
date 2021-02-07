import React, { useState } from 'react'
import LeftSB from './leftSB/LeftSB';
import RightSB from './rightSB/RightSB';
import styles from './Dashboard.module.css';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import ContactsIcon from '@material-ui/icons/Contacts';
import ContactMailIcon from '@material-ui/icons/ContactMail';

function Dashboard() {
  const [value, setValue] = useState(0);
  const [Menu, setMenu] = useState(0);
const [items, setItems] = useState([
    {
      name: 'Posts',
      Icon: InboxIcon,
      expanded: false,
      children: [
        { name: 'AllPosts', Icon: MailIcon },
        { name: 'AddNewPost', Icon: MailIcon },
        { name: 'Categories', Icon: MailIcon },
        { name: 'Tags', Icon: MailIcon },
      ]
    },
    {
      name: 'Pages',
      Icon: InboxIcon,
      expanded: false,
      children: [
        { name: 'AllPages', Icon: MailIcon },
        { name: 'AddNewPage', Icon: MailIcon }
      ]
    },
    {
      name: 'Themes',
      Icon: InboxIcon,
      expanded: false,
      children: [
        { name: 'All Themes', Icon: MailIcon },
        { name: 'Install New Theme', Icon: MailIcon }
      ]
    },
    {
      name: 'Settings',
      Icon: InboxIcon,
      expanded: false,
      children: [
        { name: 'All Posts', Icon: MailIcon },
        { name: 'Add New Post', Icon: MailIcon }
      ]
    },
    {
      name: 'Tools',
      Icon: InboxIcon,
      expanded: false,
      children: [
        { name: 'All Posts', Icon: MailIcon },
        { name: 'Add New Post', Icon: MailIcon }
      ]
    },
    {
      name: 'Plugin exaple',
      Icon: InboxIcon,
      expanded: false,
      children: [
        { name: 'All Posts', Icon: MailIcon },
        { name: 'Add New Post', Icon: MailIcon }
      ]
    },
    {
      name: 'Theme Example',
      Icon: InboxIcon,
      expanded: false,
      children: [
        { name: 'All Posts', Icon: MailIcon },
        { name: 'Add New Post', Icon: MailIcon }
      ]
    },
    {
      name: 'Addons',
      Icon: ContactsIcon,
      expanded: false,
      children: [
        { name: 'All Addons', Icon: ContactMailIcon },
        { name: 'Add New', Icon: ContactMailIcon }
      ]
    }
  ]);

  const onClick = index => () => {
    const newItems = [...items];
    const item = items[index];
    newItems[index] = { ...item, expanded: !item.expanded };
    setItems(newItems);
  };
  const onClickItem = (i,menuname) => {
    setValue(i);
    setMenu(menuname);
  }

  return (
    <div className={styles.container}>
      <div>
        <LeftSB onClickItem={onClickItem} items={items} onClick={onClick} value={value} />
      </div>
      <div className={styles.rightbar}>
        <RightSB value={value} menuname={Menu}/>
      </div>
    </div>
  )
}

export default Dashboard;
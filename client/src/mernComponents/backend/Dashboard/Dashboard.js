import React, { useState,useEffect } from 'react'
import LeftSB from './leftSB/LeftSB';
import RightSB from './rightSB/RightSB';
import styles from './Dashboard.module.css';
import {InboxIcon,ContactMailIcon,ContactsIcon,MailIcon} from '@material-ui/icons/Inbox';
import {getMenuPages} from '../../../mernmodules'
import NavBar from './NavBar';
function Dashboard({match}) {
  const [value, setValue] = useState(0);
  const [Menu, setMenu] = useState(0);
  const [Admin, setAdmin] = useState([]);
const [items, setItems] = useState([
    {
      name: 'Posts',
      Icon: InboxIcon,
      expanded: false,
      children: [
        { name: 'AllPosts', Icon: ContactsIcon },
        { name: 'AddNewPost', Icon: MailIcon },
        { name: 'Categories', Icon: ContactMailIcon },
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
        { name: 'AllThemes', Icon: MailIcon },
        { name: 'Install New Theme', Icon: MailIcon }
      ]
    },
  ]);
  useEffect(() => {
    const getDatas = async()=> {
      const data = await getMenuPages()
      setAdmin(data)
    }
    getDatas()
  }, [])

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
    <div className={styles.DashboardMain}>
      <NavBar/>
    <div className={styles.container}>
      <div className={styles.leftBar}>
        <LeftSB onClickItem={onClickItem} admin={Admin} items={items} onClick={onClick} value={value} />
      </div>
      <div className={styles.rightbar}>
        <RightSB  admin={Admin} menuname={Menu}/>
      </div>
    </div>
    </div>
  )
}

export default Dashboard;
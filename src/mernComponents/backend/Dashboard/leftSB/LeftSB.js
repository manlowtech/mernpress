import React, { Fragment } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Collapse,Paper,List,ListItem,ListItemText,ListItemIcon} from '@material-ui/core';
import {ExpandLess,ExpandMore} from '@material-ui/icons/';
import styles from './LeftSB.module.css';
import {Link} from 'react-router-dom'

const ExpandIcon = ({ expanded }) =>
       expanded ? <ExpandLess /> : <ExpandMore/>;
       const useStyles = makeStyles(theme => ({
        subItem: { paddingLeft: theme.spacing(3) }
}));
const ItemsDefault = ({items,onClick, onClickItem})=>{

    <List className={styles.container}>
    {items.map(({ Icon, ...item }, index) => (
        <Fragment key={index}>
            <ListItem className={styles.mainitem} button onClick={onClick(index)} >
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
                <ExpandIcon expanded={item.expanded} />
            </ListItem>
            <Collapse in={item.expanded}>
                {item.children.map((child, i) => (
                    <ListItem className={classes.subItem} onClick={() => onClickItem(i,child.name)} key={child.name} button dense>
                        <ListItemIcon>
                            <child.Icon />
                        </ListItemIcon>
                        <ListItemText primary={child.name} />
                    </ListItem>
                ))}
            </Collapse>
        </Fragment>
    ))}
</List>
}
const DBMenus =({admin})=>{

    admin.filter(file=> file.role === "dashboardmenupage").forEach(file => {
        return(
            <div>
                <h4 className={file.slug}>{file.name}</h4>
                {
                    admin.filter(fil=>fil.role === "submenupage" && fil.parent_slug === file.slug).map((sub,i)=>
                    <div className={fil.slug} key={i}>
                        <Link  to={`/admin/${sub.slug}`}>{sub.name}</Link>
                    </div>)
                }
            </div>
        )

        
    });
<List className={styles.container}>
    {items.map(({ Icon, ...item }, index) => (
        <Fragment key={index}>
            <ListItem className={styles.mainitem} button onClick={onClick(index)} >
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
                <ExpandIcon expanded={item.expanded} />
            </ListItem>
            <Collapse in={item.expanded}>
                {item.children.map((child, i) => (
                    <ListItem className={classes.subItem} onClick={() => onClickItem(i,child.name)} key={child.name} button dense>
                        <ListItemIcon>
                            <child.Icon />
                        </ListItemIcon>
                        <ListItemText primary={child.name} />
                    </ListItem>
                ))}
            </Collapse>
        </Fragment>
    ))}
</List>
}
export default function LeftSB({ items, onClick, onClickItem,admin }) {
   const classes = useStyles();
    return (
         <Paper>
             <ItemsDefault items={items} onClick={onClick} onClickItem={onClickItem} />
            { admin.length && <DBMenus admin={admin} />}
        </Paper>
    );
}
import React, { Fragment } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Collapse,Paper,List,ListItem,ListItemText,ListItemIcon} from '@material-ui/core';
import {ExpandLess,ExpandMore} from '@material-ui/icons/';
import styles from './LeftSB.module.css';

const ExpandIcon = ({ expanded }) =>
    expanded ? <ExpandLess /> : <ExpandMore/>;
    const useStyles = makeStyles(theme => ({
        subItem: { paddingLeft: theme.spacing(3) }
        }));
export default function LeftSB({ items, onClick, onClickItem }) {
   const classes = useStyles();
    return (
         <Paper>
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
        </Paper>
    );
}
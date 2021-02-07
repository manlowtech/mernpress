import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
//import makeStyles from '@material-ui/core/styles/makeStyles';
import {Collapse} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './LeftSB.module.css';

const ExpandIcon = ({ expanded }) =>
    expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;
export default function NestedLists({ items, onClick, onClickItem }) {

    return (

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
                            <ListItem className={styles.ItemPaddings} onClick={() => onClickItem(i,child.name)} key={child.name} button dense>
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
    );
}
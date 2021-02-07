import React from 'react'
import {Button,TextField,Table,TableHead,TableRow,TableBody,TableCell,CircularProgress,Paper,Divider} from '@material-ui/core';
import styles from './PostsCats.module.css';
function PostsCats() {
    const handleMainCat = (e)=>{

    }
    const handleCatDesc = (e)=>{

    }
    return (
        <div className={styles.container}>
            <div className={styles.catlefttb}>
            <Paper>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Date</TableCell>
                  </TableRow>
                  <Divider/>
              </TableHead>
            
              <TableBody><CircularProgress/></TableBody>
        </Table>  
        </Paper>
            </div>


            <div className={styles.catsrightadd}>
            <TextField 
            label= "Add Main Categories"
            placeholder= "enter category"
            onChange = {handleMainCat}
            />
            <TextField 
            label= "Category Description"
            placeholder="enter category description"
            onChange= {handleCatDesc}
            />
            <Button color="secondary" variant="contained" >Add Category</Button>
            </div>
        </div>
    )
}

export default PostsCats

import React, { useEffect, useState } from 'react'
import { Button, TextField, Table, TableHead, TableRow, TableBody, TableCell, CircularProgress, Paper, Divider } from '@material-ui/core';
import styles from './PostsCats.module.css';
import { getCategories,createCategory } from '../../../../../mernmodules/Taxonomies';
function PostsCats() {
    const [cat, setCat] = useState([]);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [change,setChange] = useState(false);

    useEffect(() => {
        const catdata = async () => {
            const data = await getCategories();
            console.log(data);
            setCat(data);
           

        }
        catdata();
    }, [change]);
   const handleCatSubmit = async(e)=>{
       e.preventDefault();
       const variable = {
           catname : name,
           catdescription : content,
       }
       await createCategory(variable);
       
       setName('');
       setContent('');
       setChange(!change);
   }
    const CatTable = () => cat && cat.map((cate, i) => <>
        <TableRow key={i}>
            <TableCell>{cate.id}</TableCell>
            <TableCell>{cate.opt_name}</TableCell>
            <TableCell>{cate.opt_content}</TableCell>
            <TableCell>{cate.createdAt}</TableCell>
        </TableRow>
    </>);
    return (
        <div className={styles.container}>
            <div className={styles.catlefttb}>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Category Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                            <Divider />
                        </TableHead>

                        <TableBody>{cat ? <CatTable /> : <CircularProgress />}</TableBody>
                    </Table>
                </Paper>
            </div>


            <div className={styles.catsrightadd}>
                <TextField
                    label="Add Main Categories"
                    placeholder="enter category"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
                <TextField
                    label="Category Description"
                    placeholder="enter category description"
                    value={content}
                    onChange={e=>setContent(e.target.value)}
                />
                <Button onClick={handleCatSubmit} color="secondary" variant="contained" >Add Category</Button>
            </div>
        </div>
    )
}

export default PostsCats

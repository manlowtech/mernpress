import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AllPosts.module.css';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableRow, TableBody, TableCell, CircularProgress, Paper, Divider } from '@material-ui/core';

function AllPosts(props) {
    const [Datas, setDatas] = useState([]);
    //setData(postdata.data);

    useEffect(() => {
        const AllPost = async () => {
            await axios.get('/posts/allposts').then(res => {
                if (res.data.success) {
                    console.log(res.data.posts);
                    //console.log(res.data.posts);
                    setDatas(res.data.posts);
                } else {
                    console.log("ERR DATA");
                }
            });


        }
        // console.log(postdata);
        AllPost();
    }, []);
    const handlePostDelete = async (pid) => {

        await axios.delete(`/post/delete/${pid}`);

    }

    const PostTable = () => Datas.map((post, i) => (
        <div className={styles.allPostsContainer} key={i}>
       <div className={styles.postEditd}>
                        <span  ><Link to={`/admin/post/update/${post.id}`} >Edit </Link> </span>
                        <span onClick={() => handlePostDelete(post.id)}  >Delete</span>
                    </div>
            <TableRow >
      
                <TableCell  >{post.id} </TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.post_content}</TableCell>
                <TableCell>{post.post_category}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>{post.createdAt}</TableCell>
            
            </TableRow>
       
        </div>
    ));
    return (
        <div>
            {console.log(Datas)}
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Categoy</TableCell>
                            <TableCell>Tags</TableCell>
                            <TableCell>Media</TableCell>
                            <TableCell>Aurthor</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                        <Divider />
                    </TableHead>

                    <TableBody>{Datas.length ? <PostTable /> : <CircularProgress />}</TableBody>
                </Table>
            </Paper>

        </div>
    )
}

export default AllPosts;

import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {Table,TableHead,TableRow,TableBody,TableCell,CircularProgress,Paper,Divider} from '@material-ui/core';

function AllPosts() {
    const [Datas,setDatas] = useState([]);
    //setData(postdata.data);
   
useEffect(()=>{
    const AllPost = async ()=>{
        const postdata = await axios.get('/posts/allposts').then(res=>
        {
            if(res.data.success){
                console.log(res.data.posts);
                setDatas(res.data.posts);
            }else{
            console.log("ERR DATA");
            }
        });
       
       
    }
    AllPost();
},[]);

const PostTable = ()=> Datas.map((post,i)=>(
    <>
    <TableRow key={i}>
        <TableCell>{post.id}</TableCell>
        <TableCell>{post.title}</TableCell>
        <TableCell>{post.post_content}</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell>{post.author}</TableCell>
        <TableCell>{post.createdAt}</TableCell>
    </TableRow>
    </>
 ));
    return (
        <div>
            { console.log(Datas) }
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
                  <Divider/>
              </TableHead>
            
              <TableBody>{Datas.length ? <PostTable/> : <CircularProgress/>}</TableBody>
        </Table>  
        </Paper>
       
        </div>
    )
}

export default AllPosts;

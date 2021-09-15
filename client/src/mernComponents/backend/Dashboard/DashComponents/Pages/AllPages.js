import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {Table,TableHead,TableRow,TableBody,TableCell,CircularProgress,Paper,Divider} from '@material-ui/core';

function AllPages() {
    const [Datas,setDatas] = useState([]);
    //setData(postdata.data);
   
useEffect(()=>{
    const AllPost = async ()=>{
        await axios.get('/posts/allpages').then(res=>
        {
            if(res.data.success){
                console.log(res.data.pages);
                setDatas(res.data.pages);
            }else{
            console.log("ERR DATA");
            }
        });
       
       
    }
    AllPost();
},[]);

const PostTable = ()=> Datas.map((post,i)=>(
    <div key={i}>
    <TableRow key={i}>
        <TableCell>{post.id}</TableCell>
        <TableCell>{post.title}</TableCell>
        <TableCell>{post.post_content}</TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right">{post.author}</TableCell>
        <TableCell align="right">{post.createdAt}</TableCell>
    </TableRow>
    </div>
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
                      <TableCell align="right">Categoy</TableCell>
                      <TableCell align="right">Tags</TableCell>
                      <TableCell align="right">Media</TableCell>
                      <TableCell align="right">Aurthor</TableCell>
                      <TableCell align="right">Date</TableCell>
                  </TableRow>
                  <Divider/>
              </TableHead>
            
              <TableBody>{Datas.length ? <PostTable/> : <CircularProgress/>}</TableBody>
        </Table>  
        </Paper>
       
        </div>
    )
}

export default AllPages;

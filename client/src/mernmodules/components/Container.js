import React,{useState,useEffect} from 'react'
import { getPosts } from "../";
function Container({Title,Content}) {
    const [Posts,setPosts] = useState([])
    useEffect(() => {
        const getPostsData = async()=>{
            const postsdata = await getPosts()
            setPosts(postsdata)
        }
        getPostsData()
    }, [])
    return (
        <div className="post_container">
            { Posts &&
                Posts.map((post,i)=><div key={i}>
                 <Title title={post.title} cNames={post.post_id} />
                 <Content post_content={post.post_content} cNames={post.post_content} />
                </div>)
            }
        </div>
    )
}

export default Container

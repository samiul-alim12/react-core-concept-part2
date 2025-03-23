import { use } from "react"
import Post from "./post"

export default function Posts({fetchPosts}){
    const posts = use(fetchPosts)
    return(
        <div className="card">
            <h2>All Post Are Here:{posts.length}</h2>
            {
              posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}
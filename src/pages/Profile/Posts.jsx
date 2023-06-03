import { useQuery } from "@apollo/client"
import { QUERY_POSTS } from "../../utils/queries"




export default function Posts() {
    const { data, loading } = useQuery(QUERY_POSTS)
    const posts = data?.posts || null
    console.log(posts)
    return (
        <div>
            {posts?.map((post) => {
                return (
                    <div>
                        {post.title}
                        {post.image && <img src={post.image} />}
                        {post.content}
                        <h1>by {post.postAuthor}</h1>
                    </div>
                )
            })}
        </div>
    )
}
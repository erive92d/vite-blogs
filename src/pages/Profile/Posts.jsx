import { useQuery } from "@apollo/client"
import { QUERY_POSTS } from "../../utils/queries"




export default function Posts() {
    const { data, loading } = useQuery(QUERY_POSTS)
    const posts = data?.posts || []
    console.log(posts)
    return (
        <div className="border border-red-600">
            {posts?.map((post) => {
                return (
                    <div className="border border-blue-600 m-2 text-2xl">
                        <h1>{post.postAuthor}</h1>
                        <div>
                            <h1 className="text-2xl font-bold"> {post.title}</h1>
                        </div>
                        {post.image && <img src={post.image} />}

                    </div>
                )
            })}
        </div>
    )
}
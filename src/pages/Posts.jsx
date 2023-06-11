import { useQuery } from "@apollo/client"
import DisplayPosts from "../components/DisplayPosts/DisplayPosts"
import { QUERY_POSTS, QUERY_USERS } from "../utils/queries"




export default function Posts() {
    // const { data, loading } = useQuery(QUERY_POSTS)
    // const posts = data?.posts || []
    const { data, loading } = useQuery(QUERY_USERS)
    const posts = data?.users || []

    console.log(posts)

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <DisplayPosts posts={posts} />

        </div>
    )
}
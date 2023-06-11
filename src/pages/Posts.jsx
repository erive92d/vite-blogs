import { useQuery } from "@apollo/client"
import DisplayPosts from "../components/DisplayPosts/DisplayPosts"
import { QUERY_POSTS } from "../utils/queries"




export default function Posts() {
    const { data, loading } = useQuery(QUERY_POSTS)
    const posts = data?.posts || []

    // console.log(posts)

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <DisplayPosts posts={posts} />

        </div>
    )
}
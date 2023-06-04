import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { QUERY_SINGLE_POST } from "../utils/queries"
export default function SinglePost() {
    // const [postDetails, setPostDetails] = useState([])
    const { postId } = useParams()
    const { data, loading } = useQuery(QUERY_SINGLE_POST, { variables: { postId } })

    const postDetails = data?.post || []
    if (loading) return <h1>Loading...</h1>
    console.log(postDetails)
    return (
        <>
            <h1>
                Single Post
            </h1>
            <p>
                {postDetails.title}
            </p>
        </>

    )
}
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { QUERY_SINGLE_POST } from "../utils/queries"
import AddComment from "../components/AddComments/AddComments"
import { capitalize } from "../utils/helpers/capitalize"
import auth from "../utils/auth"
import { Button } from "flowbite-react"
import { useEffect } from "react"
export default function SinglePost() {
    // const [postDetails, setPostDetails] = useState([])
    const { postId } = useParams()
    const { data, loading } = useQuery(QUERY_SINGLE_POST, { variables: { postId } })



    const postDetails = data?.post || []
    console.log(postDetails)



    if (loading) return <h1>Loading...</h1>
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="border w-full flex flex-col items-center">
                <div className="my-5">
                    <h1 className="text-xl font-bold">
                        {capitalize(postDetails.title)}
                    </h1>
                </div>
                <div className="my-5">
                    {postDetails.content}
                </div>
            </div>
            <div>
                {auth.loggedIn() ? <AddComment postId={postDetails._id} /> : <Button> <a href="/login">Sign in </a></Button>}
            </div>
            <div className="border w-full flex flex-col p-2">
                <h1>Comments</h1>
                {postDetails.comments?.map((comm) => {
                    return (
                        <div className="border p-2">
                            <p className="text-lg font-semibold">{capitalize(comm.commentAuthor)}</p>
                            <p>{comm.commentText}</p>

                            <p className="text-sm font-light text-right">{comm.createdAt}</p>
                        </div>
                    )
                })}
            </div>

        </div>

    )
}
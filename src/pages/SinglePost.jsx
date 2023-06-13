import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { QUERY_SINGLE_POST } from "../utils/queries"
import AddComment from "../components/AddComments/AddComments"
export default function SinglePost() {
    // const [postDetails, setPostDetails] = useState([])
    const { postId } = useParams()
    const { data, loading } = useQuery(QUERY_SINGLE_POST, { variables: { postId } })

    const postDetails = data?.post || []
    console.log(postDetails)
    if (loading) return <h1>Loading...</h1>
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1 className="text-xl font-bold">
                    {postDetails.title}
                </h1>
            </div>
            <div>
                {postDetails.content}
            </div>
            <div>
                <AddComment postId={postDetails._id} />
            </div>
            <div>
                <h1>Comments</h1>
                {postDetails.comments?.map((comm) => {
                    return (
                        <div>
                            <p>{comm.commentText}</p>
                            <p>{comm.commentAuthor}</p>
                        </div>
                    )
                })}
            </div>

        </div>

    )
}
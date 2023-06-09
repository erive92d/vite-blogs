import { Timeline, Button, Card } from "flowbite-react"
import { Link } from "react-router-dom"

export default function DisplayPosts({ posts }) {

    return (
        <div className="flex flex-wrap">
            {posts.map((post) => {
                return (
                    <Card
                        className="w-1/3 my-2"
                        imgSrc={post.image || "/images/blog/image-1.jpg"}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>
                                <Link to={`/posts/${post._id}`}>{post.title}</Link>
                            </p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                {post.postAuthor}                            </p>
                        </p>
                    </Card>
                )
            })}
        </div>

        // <Timeline>
        //     {posts?.map((post) => {
        //         return (

        //             <Timeline.Item key={post._id}>
        //                 <Timeline.Point />
        //                 <Timeline.Content>
        //                     <Timeline.Time>
        //                         {post.createdAt}
        //                     </Timeline.Time>
        //                     <Timeline.Title>
        //                         <Link to={`/posts/${post._id}`}>
        //                             {post.title}
        //                         </Link>
        //                         {post.image ? <img style={{ width: "10em" }} src={post.image} /> : null}

        //                     </Timeline.Title>
        //                     <Timeline.Body>
        //                         <p>

        //                             {post.postAuthor || "anonymous"}
        //                         </p>
        //                     </Timeline.Body>
        //                 </Timeline.Content>
        //             </Timeline.Item>

        //         )
        //     })}
        // </Timeline>
    )
}
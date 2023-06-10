import { Timeline, Button, Card } from "flowbite-react"
import { Link } from "react-router-dom"

export default function DisplayPosts({ posts }) {

    return (
        <div className="container flex mx-auto border items-center flex-wrap">
            <div>
                {posts.map((post) => {
                    return (

                        <div class="max-w-sm m-2 rounded overflow-hidden shadow-lg">
                            <img class="w-full" src={post.image || "/img/card-top.jpg"} alt="Sunset in the mountains" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2"> <Link to={`/posts/${post._id}`}>
                                    {post.title}
                                </Link></div>
                                <p class="text-gray-700 text-base">
                                    {post.postAuthor}                            </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </div>
                    )
                })}
            </div>

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
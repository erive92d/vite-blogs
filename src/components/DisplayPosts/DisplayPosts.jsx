import { Timeline, Button, Card } from "flowbite-react"
import { Link } from "react-router-dom"

export default function DisplayPosts({ posts }) {
    console.log(posts)

    return (
        <div className="container flex mx-auto border items-center flex-wrap">

            {posts.map((post) => {
                return (
                    <>
                        {
                            post.posts.length !== 0 ?

                                <div class="w-full m-2 rounded overflow-hidden  shadow-lg">
                                    <div className="p-2">
                                        <img style={{ height: "50px" }} src={post.profilePic} />
                                        <h1> {post.name}</h1>

                                    </div>

                                    {post.posts.map((item) => {
                                        return (
                                            <div className="my-2">
                                                <div class="px-6 py-4">
                                                    <div class="font-bold text-xl mb-2"> <Link to={`/posts/${post._id}`}>
                                                        {item.title}
                                                    </Link></div>
                                                    <p class="text-gray-700 text-base">
                                                        {item.postAuthor}                            </p>
                                                </div>

                                            </div>
                                        )
                                    })}

                                </div>
                                : null

                        }
                    </>


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
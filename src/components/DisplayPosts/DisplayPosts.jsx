import { Timeline, Button, Card } from "flowbite-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function DisplayPosts({ posts }) {

    const [userPosts, setUserPosts] = useState([])
    useEffect(() => {
        const sortPosts = () => {
            let arrayPosts = []
            posts.map((post) => post.posts.length !== 0 ? arrayPosts.push(post.posts) : null)
            let actualPosts = [].concat(...arrayPosts)
            setUserPosts(actualPosts)
        }

        sortPosts()
    }, [])

    return (
        <div className="container flex mx-auto border items-center flex-wrap">

            {userPosts?.map((post) => {
                return (
                    <>

                        <div class="w-full m-2 rounded overflow-hidden  shadow-lg">

                            <div class="px-6 py-4">
                                <div>
                                    {post.postAuthor}
                                </div>
                                <div class="font-bold text-xl mb-2"> <Link to={`/posts/${post._id}`}>
                                    {post.title}
                                </Link>
                                </div>
                                <div className="text-right  font-light text-sm">
                                    {post.createdAt}
                                </div>
                                {post.comments.length} comments

                            </div>



                        </div>

                    </>


                )
            })}


        </div>

    )
}
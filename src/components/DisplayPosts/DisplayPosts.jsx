import { Timeline, Button, Card } from "flowbite-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { capitalize } from "../../utils/helpers/capitalize"
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
                    <div className="w-full">
                        <Link to={`/posts/${post._id}`}>
                            <div class="w-full m-1 rounded overflow-hidden  shadow-lg">

                                <div class="px-6 py-4">
                                    <div>
                                        {capitalize(post.postAuthor)}
                                    </div>
                                    <div class="font-bold text-xl mb-2">
                                        {post.title}

                                    </div>

                                    {post.comments.length} comments
                                    <div className="text-right font-light text-sm">
                                        {post.createdAt}
                                    </div>

                                </div>



                            </div>
                        </Link>
                    </div>


                )
            })}


        </div>

    )
}
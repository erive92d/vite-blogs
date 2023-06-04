import { Timeline, Button } from "flowbite-react"
import { Link } from "react-router-dom"

export default function DisplayPosts({ posts }) {

    return (
        <Timeline>

            {posts?.map((post) => {
                return (
                    <>
                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                                <Timeline.Time>
                                    {post.createdAt}
                                </Timeline.Time>
                                <Timeline.Title>
                                    <Link to={`/posts/${post._id}`}>
                                        {post.title}
                                    </Link>

                                </Timeline.Title>
                                <Timeline.Body>
                                    <p>
                                        {post.content}
                                    </p>
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                    </>
                )
            })}
        </Timeline>
    )
}
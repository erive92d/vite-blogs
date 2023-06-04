import { Timeline, Button, Card } from "flowbite-react"
import { Link } from "react-router-dom"

export default function DisplayPosts({ posts }) {

    return (
        <Timeline>
            {posts?.map((post) => {
                return (

                    <Timeline.Item key={post._id}>
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

                                    {post.postAuthor || "anonymous"}
                                </p>
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>

                )
            })}
        </Timeline>
    )
}
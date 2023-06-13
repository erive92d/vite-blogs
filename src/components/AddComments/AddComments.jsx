
import { Label, Textarea, Button } from 'flowbite-react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';
import { useState } from 'react';
import auth from '../../utils/auth';
export default function AddComment({ postId }) {

    const [addComment, { error, data }] = useMutation(ADD_COMMENT)
    const [input, setInput] = useState({
        commentText: "",
    })

    const handleChange = (e) => {
        setInput({ ...input, commentText: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const token = auth.loggedIn() ? auth.getToken() : null
        if (!token) {
            return false
        }

        console.log(auth.getProfile())

        try {
            const { data } = await addComment({
                variables: {
                    ...input,
                    postId: postId,
                    commentAuthor: auth.getProfile().data.name
                }
            })

            window.location.reload()

            console.log(data)
        } catch (error) {
            console.error(error)
        }


        setInput({
            commentText: ""
        })

    }



    return (
        <div
            className="max-w-md flex my-5"
            id="textarea"

        >

            <Textarea
                onChange={handleChange}
                className="mx-2"
                id="comment"
                placeholder="Leave a comment..."
                required
                rows={2}
            />
            <Button type="submit" onClick={handleSubmit}>
                Comment
            </Button>

        </div>
    )
}




import { useState } from "react";
import { ADD_POST } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import auth from "../../utils/auth";
import { QUERY_POSTS } from "../../utils/queries";
import ImageUpload from "../ImageUploading/ImageUpload";
export default function CreatePost() {

    const [addPost, { error, data }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });

                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [...posts, addPost] },
                });
            } catch (e) {
                console.error(e);
            }
        },
    })

    const [input, setInput] = useState(
        {
            title: "",
            content: "",
            image: null
        }
    )

    const handleChange = (e) => {



        e.preventDefault()
        const { value, name } = e.target
        setInput({ ...input, [name]: value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = auth.loggedIn() ? auth.getToken() : false

        if (!token) {
            return false
        }
        try {
            const { data } = addPost({
                variables: {
                    ...input,
                    postAuthor: auth.getProfile().name
                }
            })


        } catch (error) {
            console.error(error)
        }

        setInput({
            title: "",
            content: "",
            image: null,
            postAuthor: ""
        })

    }

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList);
        // setImages(imageList);
        setInput({ ...input, image: imageList[0].data_url })

    };

    console.log(input)


    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" value={input.title} type="text" placeholder="title"></input>
                <input onChange={handleChange} name="content" value={input.content} type="text" placeholder="What's on your mind..."></input>
                <ImageUpload onChange={onChange} ></ImageUpload>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>
    )
}
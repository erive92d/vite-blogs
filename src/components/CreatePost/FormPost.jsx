import { TextInput, Textarea, Label, Button } from "flowbite-react"
import { useState } from "react"
import auth from "../../utils/auth"
import { useMutation } from "@apollo/client"
import { ADD_POST } from "../../utils/mutations"
import { QUERY_POSTS } from "../../utils/queries";
import ImageUpload from "../ImageUploading/ImageUpload";


export default function FormPost() {

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


        try {
            const { data } = addPost({
                variables: {
                    ...input,
                    postAuthor: auth.getProfile().name
                }
            })

            window.location.reload()


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

    //Image
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList);
        // setImages(imageList);
        setInput({ ...input, image: imageList[0].data_url })

    };

    return (
        <form className="space-y-6">

            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                What's on your mind?
            </h3>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="title"
                        value="title"
                    />
                </div>
                <TextInput
                    onChange={handleChange}
                    value={input.title}
                    name="title"
                    placeholder="title..."
                    key="0"
                    required
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="body"
                        value="Your body"
                    />
                </div>
                <Textarea
                    onChange={handleChange}
                    key="1"
                    // value={input.content}
                    name="content"
                    required
                    type="text"
                    placeholder="body..."
                />
            </div>
            {/* <div>
                <ImageUpload onChange={onChange} />
            </div> */}


            <div className="w-full">
                <Button onClick={handleSubmit} type="submit">
                    Post it!
                </Button>
            </div>



        </form>

    )
}
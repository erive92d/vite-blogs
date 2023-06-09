import { useState } from "react";
import { ADD_POST } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import auth from "../../utils/auth";

import { Modal, TextInput, Label, Button, Textarea } from "flowbite-react";
import FormPost from "./FormPost";
export default function CreatePost() {
    const [modal, setModal] = useState(false)


    return (
        <div>
            <Button onClick={() => setModal(true)}>
                Create a Post
            </Button>
            <Modal
                show={modal}
                onClose={() => setModal(false)}
                popup
                size="md"
            >
                <Modal.Header />
                <Modal.Body>
                    <FormPost />
                </Modal.Body>
            </Modal>
        </div>




    )
}
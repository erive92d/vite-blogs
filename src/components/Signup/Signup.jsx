import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import auth from '../../utils/auth';
import ImageUpload from '../ImageUploading/ImageUpload';
import penguin from "./Avatars/penguin.png"
import giraffe from "./Avatars/giraffe.jpeg"
import fox from "./Avatars/fox.jpeg"
const Signup = () => {
  const [addUser, { data, error }] = useMutation(ADD_USER)
  const [images, setImages] = useState([]);
  // const [proPic, setProPic] = useState("")
  const [input, setInput] = useState({
    email: "",
    name: "",
    password: "",
    profilePic: ""
  })

  const handleChange = (e) => {
    const { value, name } = e.target

    setInput({ ...input, [name]: value })



  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await addUser(
        {
          variables: { ...input }
        }
      )

      auth.login(data.addUser.token);
      window.location.assign("/")

    } catch (err) {
      console.error(err)
    }


    // setInput({
    //     email: "",
    //     name: "",
    //     password: ""
    // })
  }

  console.log(input)

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList);
    // setImages(imageList);
    setInput({ ...input, profilePic: imageList[0].data_url })

  };

  const handleAvatar = (e) => {
    e.preventDefault()
    // console.log(e.target.src)
    setInput({ ...input, profilePic: e.target.src })
  }


  return (
    <div className="flex flex-col justify-center items-center ">
      <div className='flex'>
        <img onClick={handleAvatar} style={{ height: "70px" }} src={fox}></img>

        <img onClick={handleAvatar} style={{ height: "70px" }} src={giraffe}></img>
        <img onClick={handleAvatar} style={{ height: "70px" }} src={penguin}></img>
      </div>
      {data ? (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">


            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={input.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={input.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      )}
      {error && (
        <div className="my-3 p-3 bg-danger text-black">
          <h1>
            {error.message}
          </h1>
        </div>
      )}

    </div>
  );
};

export default Signup;

import React, { useState } from 'react'
import { LOGIN_USER } from '../../utils/mutations'
import { useMutation } from '@apollo/client'
import auth from '../../utils/auth'
export default function Login() {

    const [login, { error, data }] = useMutation(LOGIN_USER)
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setInput({
            ...input,
            [name]: value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(input)
        //continue from here
        try {
            const { data } = await login({
                variables: { ...input }
            })
            auth.login(data.login.token)
            window.location.assign("/")
        } catch (error) {
            console.error(error, '@@@@@@@@@@')
        }

        setInput({
            email: "",
            password: ""
        })
    }

    return (
        <div className="flex justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            onChange={handleChange}
                            value={input.email}
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            onChange={handleChange}
                            name="password"
                            value={input.password}
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleSubmit}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign In
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
        // <div>
        //     <h1>
        //         This is Log In!
        //     </h1>
        //     <form>
        //         <input onChange={handleChange} value={input.email} type='text' name='email'></input>
        //         <input onChange={handleChange}  value={input.password} type='text' name='password'></input>
        //         <button type='submit' onClick={handleSubmit}>Submit</button>
        //     </form>
        // </div>
    )
}

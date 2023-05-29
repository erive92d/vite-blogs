import React, { useState } from 'react'
import { LOGIN_USER } from '../../utils/mutations'
import { useMutation } from '@apollo/client'
import auth from '../../utils/auth'
export default function Login() {

    const [login, {error, data}] = useMutation(LOGIN_USER)
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {value, name} = e.target
        setInput( { ...input,
            [name]: value
        })
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(input)
        //continue from here
        try {
            const {data} = await login({
                variables: {...input}
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
    <div>
        <h1>
            This is Log In!
        </h1>
        <form>
            <input onChange={handleChange} value={input.email} type='text' name='email'></input>
            <input onChange={handleChange}  value={input.password} type='text' name='password'></input>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

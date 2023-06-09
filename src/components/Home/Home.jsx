import React from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_USERS } from '../../utils/queries'
import Posts from '../../pages/Posts'
import CreatePost from '../CreatePost/CreatePost'
import auth from '../../utils/auth'


export default function Home() {

  const { data, loading } = useQuery(QUERY_USERS)
  const users = data?.users || []


  return (
    <div className='border w-100 text-lg'>
      <img style={{ width: "100%", height: "70vh" }} src='./homebg.jpg'></img>

      {auth.loggedIn() && <CreatePost />
      }
      <Posts />
    </div>
  )
}

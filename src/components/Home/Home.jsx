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
    <div className='border p-4 text-lg'>
      <h1 className='font-bold text-4xl'>
        What the Blogs...?

      </h1>
      {auth.loggedIn() && <CreatePost />
      }
      <Posts />
    </div>
  )
}

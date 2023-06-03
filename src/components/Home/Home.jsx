import React from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_USERS } from '../../utils/queries'
import Posts from '../../pages/Profile/Posts'
import CreatePost from '../CreatePost/CreatePost'


export default function Home() {

  const { data, loading } = useQuery(QUERY_USERS)
  const users = data?.users || []


  console.log(users)
  return (
    <div className='border p-2 mx-auto'>
      <h1>
        This is Home page!

      </h1>
      <CreatePost />
      <Posts />
    </div>
  )
}

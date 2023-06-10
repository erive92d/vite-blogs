import React from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_USERS } from '../../utils/queries'
import Posts from '../../pages/Posts'
import CreatePost from '../CreatePost/CreatePost'
import auth from '../../utils/auth'
import Sidebar from '../Sidebar/Sidebar'


export default function Home() {

  const { data, loading } = useQuery(QUERY_USERS)
  const users = data?.users || []


  return (
    <div className='border flex text-lg relative'>
      <div className='border w-1/3'>
        {auth.loggedIn() && <CreatePost />
        }
        <Sidebar />
      </div>



      <Posts />
    </div>
  )
}

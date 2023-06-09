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
    <div className='border flex text-lg'>
      <Sidebar />
      {/* <img style={{ width: "100%", height: "60vh" }} src='./homebg.jpg'></img> */}

      {auth.loggedIn() && <CreatePost />
      }
      <Posts />
    </div>
  )
}

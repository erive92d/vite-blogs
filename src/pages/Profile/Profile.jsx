import React from 'react'
import { QUERY_ME } from '../../utils/queries'
import { useQuery } from '@apollo/client'

export default function Profile() {

  const { data, loading } = useQuery(QUERY_ME)

  const userData = data?.me || []
  console.log(userData)
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={userData.profilePic}
        alt="Profile Picture"
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="text-2xl font-bold">{userData.name}</h1>
      <p className="text-gray-600">{userData.email}</p>
      {userData.posts?.length === 0 && (<div> <h1>Post something!</h1></div>)}
    </div>
  )
}

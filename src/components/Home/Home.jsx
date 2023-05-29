import React from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_USERS } from '../../utils/queries'


export default function Home() {

  const {data, loading} = useQuery(QUERY_USERS)
  const users = data?.users || []
  console.log(users)
  return (
    <div>
        <h1>
            This is Home page!
        </h1>
    </div>
  )
}

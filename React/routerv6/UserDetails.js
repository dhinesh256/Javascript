import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const params = useParams() /*EXTRACTING URL PARAMS */
    const userId = params.userId
  return (
    <div>User Details for user # {userId}</div>
  )
}

export default UserDetails
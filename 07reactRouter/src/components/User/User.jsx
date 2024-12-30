import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userId} = useParams();

    return (
        <div className="text-center bg-gray-200 text-3xl p-4">
            User:  {userId}
        </div>
  )
}

export default User

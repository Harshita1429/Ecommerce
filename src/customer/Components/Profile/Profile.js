import { Card } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {
    const user=useSelector((state)=>state.user.userData);
  return (
    <div>
        <Card className='p-10'>
            {"Name: "+user?.[0].firstname+" "+user?.[0].lastname}<br></br>
            {"Email: "+user?.[0].email}
        </Card>
    </div>
  )
}

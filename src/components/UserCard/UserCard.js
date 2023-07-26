import React from 'react'
import { User } from '@carbon/icons-react';
const UserCard = ({name,email}) => {
  return (
    <div className='card'>
      <User size={24} />
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  )
}

export default UserCard

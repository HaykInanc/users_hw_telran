import React from 'react'
import UserItem from './UserItem'

export default function UsersContainer({users, showToggle, deleteUser}) {

  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: '450px',
    gap: '10px'
  };

  return (
    <div style={style}>
        {users.length === 0 
            ? <p>Пользователей нет =(</p>
            : users.map(user => 
                <UserItem 
                    key={user.id} 
                    showToggle={showToggle} 
                    deleteUser={deleteUser}
                    {...user}/>)
        }
    </div>
  )
}

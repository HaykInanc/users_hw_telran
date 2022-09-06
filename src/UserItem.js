import React from 'react'
import no_avatar from './media/no_avatar.jpeg';

export default function UserItem({id, name, avatar, hide, showToggle, deleteUser}) {
  
  const style = {
    padding: '20px',
    border: '2px solid black'
  }
  
  const img_style = {
    width: '250px',
    height: '300px',
    objectFit: 'cover'
  }

  return (
    <div style={style} onDoubleClick={()=>showToggle(id)}>
        <img style={img_style} src={hide ? no_avatar : avatar} alt="avatar" />
        <p>{hide ? '*****': name }</p>
        <button onClick={()=>deleteUser(id)}>Удалить</button>
    </div>
  )
}

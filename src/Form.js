import React from 'react'

export default function Form({addUser}) {

  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, max-content)',
    gap: '20px',
    margin: '50px 0',
    justifyContent: 'center'
  }
    
  const submit = event =>{
    event.preventDefault();
    const {name, avatar} = event.target;
    addUser(name.value, avatar.value);
    name.value = '';
    avatar.value = '';
  }

  return (
    <form style={style} onSubmit={submit}>
        <input placeholder='name' type="text" name='name'/>
        <input placeholder='avatar' type="text" name='avatar'/>
        <button>Добавить</button>
    </form>
  )
}

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Pages.css'


function Pages() {
    const navigate=useNavigate()
    const[name,setName]=useState('')

    useEffect(()=>{
        const name = localStorage.getItem('name')
        setName(name)
    })

    const toPosts=()=>{
        navigate(`./posts`)
    }

    const toAlbums=()=>{
        navigate(`./albums`)
    }

    const toProfile=()=>{
        navigate(`./profile`)
    }

    const toTodo=()=>{
        navigate(`./todo`)
    }

  return (
    <div className='buttons'>
     <strong>   {
            name
        }</strong>
      <button className='btn' onClick={()=>toPosts()}>Posts</button>
      <button className='btn'  onClick={()=>toAlbums()}>Albums</button>
      <button className='btn'  onClick={()=>toProfile()}>Profile</button>
      <button className='btn'  onClick={()=>toTodo()}>Todo</button>
    </div>
  )
}

export default Pages

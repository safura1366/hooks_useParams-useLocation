import React from 'react'
import { useLocation } from 'react-router'

export default function UserIndex() {
 const {search}= useLocation()
 const query= new URLSearchParams(search)
 console.log(query.get('name'))
 console.log(search)
  return (
    <div>
      <h1> user index page</h1>
    </div>
  )
}

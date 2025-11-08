import React from 'react'
import { useParams } from 'react-router'

export default function UserShow() {
  const {id} =useParams()
  return (
    <div>
      <h1>user Show- {id}</h1>
    </div>
  )
}

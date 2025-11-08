import React from 'react'
import { useLocation } from 'react-router'

export default function UserIndex() {

  console.log (useLocation().state.name)
  return (
    <div>
      <h1> user index page</h1>
    </div>
  )
}

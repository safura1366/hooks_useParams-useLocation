import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div>
      <h1>home page</h1>
      <Link to="/users">users</Link>
    </div>
  )
}

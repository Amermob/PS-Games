import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedLink = ({ children, user }) => {
    console.log(`not logged in: ${user}`)
  return user ? children : <Navigate to=".."></Navigate>
}

export default ProtectedLink
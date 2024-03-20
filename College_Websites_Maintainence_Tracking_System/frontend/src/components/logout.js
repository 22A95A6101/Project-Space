import React, { useEffect } from 'react'

const Logout = () => {
    useEffect(()=>{
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        window.location.href="/"
    })
  return (
    <div>
      
    </div>
  )
}
export default Logout

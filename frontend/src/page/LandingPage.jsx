import React from 'react'
import Button from '../component/element/Button'
import LoginUserBar from '../component/LoginUserBar'
import RegistUserBar from '../component/RegistUserBar'

const LandingPage = () => {
  return (
    <div className=' flex h-screen'>
        <Button>Login</Button>
        <LoginUserBar/>
        <RegistUserBar/>
    </div>
  )
}

export default LandingPage
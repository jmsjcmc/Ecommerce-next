import { SignInButton } from '@clerk/nextjs'
import React from 'react'

export default function SignIn() {
  return (
    <SignInButton mode='modal'>
<button className='text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer hoverEffect'>
      Log In
    </button>
    </SignInButton>
  )
}

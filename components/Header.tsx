import React from 'react'
import Container from './Container'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='bg-white py-5'>
        <Container>
            {/* Logo */}
<Logo/>
            {/* Nav Button */}
            {/* Nav Admin */}
        </Container>
    </header>
  )
}

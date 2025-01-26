import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    
      <nav className='flex justify-around mx-auto h-14'>
        <Link href="/"><h1>Home</h1></Link>
        <div className='flex gap-2'>
            <Link href="performance">Performance</Link>
            <Link href="reliability">Reliablity</Link>
        </div>
      </nav>
  )
}

export default NavBar

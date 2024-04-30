import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

const Signup = () => {
  return (
    <div>
      <h1 className='text-center text-2xl font-medium my-2'>Sign up to Snapchat</h1>
      <Button className='w-full my-4 gap-2'><FaGithub size={24} /> Signup with Github</Button>
      <p className=''>Already have an account ? <Link href="/login" className='underline cursor-pointer'>Login</Link></p>
    </div>
  )
}

export default Signup
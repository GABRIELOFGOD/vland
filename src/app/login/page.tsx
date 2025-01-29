"use client"

import BigButton from '@/components/common/buttons/BigButton';
import FormInput from '@/components/common/inputs/FormInput'
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  return (
    <div className='h-screen w-screen justify-center items-center flex px-3 text-white'>
      <div className='bg-primary bg-opacity-20 backdrop-blur-lg p-10 rounded-md w-fit md:w-[500px] flex flex-col gap-5'>
        <div>
          <h1 className='text-white text-4xl'>Login</h1>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex flex-col gap-5'
        >
          <FormInput
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            type='email'
            value={email}
          />
          <FormInput
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
            value={password}
          />
          <BigButton
            text='Login'
          />
        </form>
        <div className='flex justify-between'>
          <div>
            <p className='text-white text-sm'>Don't have an account? <Link href="/register" className='text-primary font-bold'>Register</Link></p>
          </div>
          <div>
            <p className='text-white text-sm'><Link href="/forgot-password" className='text-primary font-bold'>Forgot Password?</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
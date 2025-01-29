"use client"

import BigButton from '@/components/common/buttons/BigButton';
import FormInput from '@/components/common/inputs/FormInput'
import Link from 'next/link';
import React, { useState } from 'react'

const Register = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  return (
    <div className='h-screen w-screen justify-center items-center flex px-3 text-white'>
      <div className='bg-primary bg-opacity-20 backdrop-blur-lg p-10 rounded-md w-fit md:w-[500px] flex flex-col gap-5'>
        <div>
          <h1 className='text-white text-4xl'>Register</h1>
          <p className='text-white text-sm'>Create an account to start exploring</p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex flex-col gap-5'
        >
          <FormInput
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            type='text'
            value={name}
          />
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
            text='Register'
          />
        </form>
        <div>
          <p className='text-white text-sm'>Already have an account? <Link href="/login" className='text-primary font-bold'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register
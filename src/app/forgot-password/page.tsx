"use client"

import BigButton from '@/components/common/buttons/BigButton';
import FormInput from '@/components/common/inputs/FormInput'
import Link from 'next/link';
import React, { useState } from 'react'

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  
  return (
    <div className='h-screen w-screen justify-center items-center flex px-3 text-white'>
      <div className='bg-primary bg-opacity-20 backdrop-blur-lg p-10 rounded-md w-fit md:w-[500px] flex flex-col gap-5'>
        <div>
          <h1 className='text-white text-4xl'>Forgot Password</h1>
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
          <BigButton
            text='Request Email'
          />
        </form>
        <div>
          <p className='text-white text-sm'>Already have an account? <Link href="/login" className='text-primary font-bold'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
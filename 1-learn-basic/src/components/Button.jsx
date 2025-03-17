"use client"
import React from 'react'

const Button = () => {
  return (
    <div onClick={() => console.log('clicked')} className='bg-red-500 border border-black'>Click</div>
  )
}

export default Button
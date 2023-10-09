import React from 'react'
import { BiLogoReact } from 'react-icons/bi'

export default function Footer() {
  return (
    <div className='flex flex-col gap-2 items-center border-t border-gray-500 p-6 mt-16'>
  
        <BiLogoReact className='text-3xl'/> SAMTECH EXPO
  
        <span>Copyright 2023 All Rights Reserved</span>
    </div>
  )
}

import React from 'react'

export default function TopBar() {
  return (
<div className='bg-white '>
<div className="flex flex-wrap justify-between w-full container p-2">
      <div className="flex flex-row justify-center max-sm:yw-full order-1 sm:px-0">
        <p className="max-sm:text-[13px]">Mail: webzedcontact@gmail.com</p>
        <p className="ml-3">|</p>
        <p className="ml-3 max-sm:text-[13px]">Helpline 4534345656</p>
      </div>

      <div className="flex flex-wrap justify-center order-2 max-sm:w-full">
        <p className="ml-3 max-sm:text-[13px]">LOGIN</p>
        <p className="ml-3">|</p>
        <p className="ml-3 max-sm:text-[13px]">REGISTER</p>
      </div>
    </div>
</div>
  )
}

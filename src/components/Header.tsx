import React from 'react'
import {Button} from '@/components/ui/button'


const Header = () => {
  return (
    <>
    <div className="absolute top-7 right-20 left-20 flex flex-row justify-between">
        <div>Dignifi</div>
        <div><Button className='bg-purple-400  hover:bg-blue-700'>Sign In</Button></div>
      </div>
    </>
  )
}

export default Header
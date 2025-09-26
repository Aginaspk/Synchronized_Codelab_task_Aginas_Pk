import { LineSquiggle } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='max-w-6xl mx-auto flex justify-center'>
        <div className='w-full h-full py-6 rounded-2xl shadow-2xl px-10 bg-gray-100 flex justify-between items-center'>
            <div className=' h-full'>
                <h1 className='text-4xl font-bold'>Pattern Finder</h1>
                <h3 className='text-lg'>Mern Stack Dev Task</h3>
            </div>
            <div className='h-full  flex items-center '>
                <LineSquiggle size={30}/>
            </div>


        </div>
        
    </div>
  )
}

export default Header
'use client';
import React from 'react'

export default function Sidebar() {
    // Create a temporary array for testing
    const sampleArray = ['Dashboard', 'Employers', 'Messages', 'Careers'];

  return (
    <>
        <div className='w-full h-full border-r border-black'>
            <div className='flex justify-start w-full h-[12%] sm:w-full p-2'>
                <img className="w-[35%] h-[90%]" src="JT.png" alt="" />
            </div>
            <div className='flex flex-col items-start justify-start w-full h-[88%] p-2'>
                {sampleArray && (
                    sampleArray.map((element:any) => (
                        <div className='p-3 w-full mt-1 hover:cursor-pointer hover:bg-green-600 hover:rounded-md hover:text-white transition-all duration-200 ease-out' key={element}>
                            <h1>{element}</h1>
                        </div>
                    ))
                )}
            </div>
        </div>
    </>
  )
}

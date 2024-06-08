'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

interface SidebarProps {
    setDashboard: React.Dispatch<React.SetStateAction<any>>;
    setEmployers: React.Dispatch<React.SetStateAction<any>>;
    setJobApplications: React.Dispatch<React.SetStateAction<any>>;
    setHome: React.Dispatch<React.SetStateAction<any>>;
  }

export default function Sidebar({setDashboard,setEmployers,setJobApplications,setHome}:SidebarProps) {
    const router = useRouter();
    const btnRef = useRef<(HTMLButtonElement|null)[]>([]);
    // Create a temporary array for testing
    const sampleArray = [{
        name: 'Home',
        value: 'home',
        state: setHome
        },
        {
        name: 'Dashboard',
        value: 'dashboard',
        state: setDashboard
        },
        {
        name: 'Employers',
        value: 'employers',
        state: setEmployers
        },
        {
        name: 'Job Applications',
        value: 'jobApplications',
        state: setJobApplications
        },
    ];

    useEffect(() => {
        if(btnRef.current[0]){
            btnRef.current[0]!.className = 'text-start p-3 w-full mt-2 hover:cursor-pointer bg-green-400 hover:bg-green-600 hover:rounded-md hover:text-white rounded-md transition-all duration-200 ease-out';
        }
    },[])

    // Create a button to change the state of the current page depending on the user click
    const clicked = (name:string, value:string, state:any, index:number) => {
        console.log(btnRef.current);
        if (btnRef.current[index]) {
            btnRef.current[index]!.className = 'text-start p-3 w-full mt-2 hover:cursor-pointer bg-green-400 hover:bg-green-600 hover:rounded-md hover:text-white rounded-md transition-all duration-200 ease-out';
        }
        const notBtn = btnRef.current.filter((element:any) => btnRef.current[index] != element); // Get all refs except the one clicked
        console.log(notBtn);
        for(var i = 0; i < notBtn.length; i++){
            notBtn[i]!.className = 'text-start p-3 w-full mt-2 hover:cursor-pointer hover:bg-green-600 hover:rounded-md hover:text-white transition-all duration-200 ease-out'; // Set all not included to false
        }
        const notIncluded = sampleArray.filter((element:any) => value != element.value); // Get all states that are not clicked
        for(var i = 0; i < notIncluded.length; i++){
            notIncluded[i].state(false); // Set all not included to false
        }
        state(true); // Change the state to true
    };

    // Create a dynamic renderer for easier designing
    const renderer = (name:any, value:any, state:any, index:number) => (
        <>
            <button ref={ref => (btnRef.current[index] = ref)} onClick={() => {clicked(name, value, state, index)}} className='text-start p-3 w-full mt-2 hover:cursor-pointer hover:bg-green-600 hover:rounded-md hover:text-white transition-all duration-200 ease-out' key={name}>
                <h1>{name}</h1>
            </button>
        </>
    )

  return (
    <>
        <div className='w-full h-full border-r border-black'>
            <div className='flex justify-start w-full h-[12%] min-h-[12%] max-h-[12%] border-b border-black sm:w-full p-2'>
                <img className="w-[35%] h-[90%]" src="JT.png" alt="" />
            </div>
            <div className='flex flex-col items-start justify-start w-full h-[88%] py-2 px-3'>
                {sampleArray && (
                    sampleArray.map((element:any, index:number) => (
                        <>
                            {renderer(element.name, element.value, element.state, index)}
                        </>
                    ))
                )}
            </div>
        </div>
    </>
  )
}

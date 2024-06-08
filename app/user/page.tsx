'use client'
import Header from '@/components/Header/Header';
import { createClient } from '@/utils/supabase/client'
import React, { useEffect, useState } from 'react'
import { signOut } from '../../functions/signout';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar/Sidebar';
import Dashboard from '@/components/User/Dashboard';
import Employers from '@/components/User/Employers';


export default function Page() {
    const router = useRouter();
    const supabase = createClient();
    const [sessionData, setSessionData] = useState<any>(null);
    const [mobileMode, setMobileMode] = useState<boolean>(true);

    const [dashboard, setDashboard] = useState<boolean>(false);
    const [employers, setEmployers] = useState<boolean>(false);
    const [jobApplications, setJobApplications] = useState<boolean>(false);
    const [home, setHome] = useState<boolean>(true);

    // Check if user is logged in
    const getUserSession = async() => {
    const {data: { session },} = await supabase.auth.getSession();
    if (session) {
            setSessionData(session);
        }
        else{
            router.push('/');
        }
    };

    // Handle media changes
    const mediaChange = (event: MediaQueryListEvent) => {
        if(event.matches){
            setMobileMode(true);
        }
        else{
            setMobileMode(false);
        };
    };
  
    // Run once on component load
    useEffect(() => {
        getUserSession();
        // Create a media watcher
        const mediaQuery = window.matchMedia('(max-width: 640px)'); 
        getUserSession();
        mediaQuery.addEventListener('change', mediaChange);
        if(mediaQuery.matches){
            setMobileMode(true);
        }
        else{
            setMobileMode(false);
        };
    },[])

    // Check changes in state
    useEffect(() => {
        console.log(dashboard);
    }, [dashboard])

    useEffect(() => {
        console.log(employers);
    }, [employers])

    useEffect(() => {
        console.log(jobApplications);
    }, [jobApplications])

    useEffect(() => {
        console.log(home);
    }, [home])

  return (
    sessionData && (
        <>
            <div className='flex w-full h-screen'>
                {mobileMode && (
                    <>
                    <div className='flex flex-col w-full h-full'>
                        <Header/>
                        <div className='flex justify-center p-2 w-full h-full'>
                            <div className='flex flex-col items-center p-2 bg-white border-[2px] w-[90%] h-[50%] border-black rounded-md'>
                                <h1 className='text-3xl text-center font-bold'>Welcome to JuanTask</h1>
                                <h1>{sessionData.user.email}</h1>
                                <form action={signOut} className='flex flex-col items-center p-2'>
                                    <button className='py-2 px-3 text-center rounded-md bg-green-200 border-green-600 border-[2px]'>
                                        Sign Out
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </>
                )}
                {!mobileMode && (
                    <>
                    <div className='sm:flex sm:w-[15%] w-0'>
                        <Sidebar setDashboard={setDashboard} setEmployers={setEmployers} setJobApplications={setJobApplications} setHome={setHome}/>
                    </div>
                    <div className='flex flex-col sm:w-[85%] w-full h-full'>
                        <Header/>
                        {home && (
                            <div className='flex justify-center p-2 w-full h-[90%]'>
                                <div className='flex flex-col items-center p-2 bg-white border-[2px] w-[90%] h-[50%] border-black rounded-md'>
                                    <h1 className='text-3xl text-center font-bold'>Welcome to JuanTask</h1>
                                    <h1>{sessionData.user.email}</h1>
                                    <form action={signOut} className='flex flex-col items-center p-2'>
                                        <button className='py-2 px-3 text-center rounded-md bg-green-200 border-green-600 border-[2px]'>
                                            Sign Out
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                        {dashboard && (
                            <Dashboard/>
                        )}
                        {employers && (
                            <Employers/>
                        )}
                    </div>
                    </>
                )}
            </div>
            
        </>
    )
  )
}

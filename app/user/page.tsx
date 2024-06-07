'use client'
import Header from '@/components/Header/Header';
import { createClient } from '@/utils/supabase/client'
import React, { useEffect, useState } from 'react'
import { signOut } from '../../functions/signout';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const supabase = createClient();
    const [sessionData, setSessionData] = useState<any>(null);

    // Check if user is logged in
    const getUserSession = async() => {
    const {data: { session },} = await supabase.auth.getSession();
    if (session) {
            setSessionData(session);
        };
    };
  
    // Run once on component load
    useEffect(() => {
        getUserSession();
    },[])

  return (
    sessionData && (
        <>
            <Header/>
            <div className='flex items-center justify-center p-2 w-full h-full'>
                <div className='flex flex-col items-center p-2 bg-white border-[2px] w-[90%] border-black rounded-md'>
                    <h1 className='text-3xl font-bold'>Welcome to JuanTask</h1>
                    <h1>{sessionData.user.email}</h1>
                    <form action={signOut} className='flex flex-col items-center p-2'>
                        <button className='py-2 px-3 text-center rounded-md bg-green-200 border-green-600 border-[2px]'>
                            Sign Out
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
  )
}

import Header from '@/components/Header/Header';
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Page() {
    const supabase = createClient();
    const {data:{session}} = await supabase.auth.getSession();

    if(!session){
        return redirect('/');
    };
    
    const signOut = async () => {
        'use server';
    
        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect('/');
      };
  return (
    session && (
        <>
            <Header/>
            <div className='flex items-center justify-center py-1 px-2 w-full h-full'>
                <div className='flex flex-col items-center p-2 bg-green-100 border-[2px] w-full border-black rounded-md'>
                    <h1 className='text-3xl font-bold'>Welcome to JuanTask</h1>
                    <h1>Email: {session.user.email}</h1>
                    <h1>User ID: {session.user.id}</h1>
                    <h1>Role: {session.user.role}</h1>
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

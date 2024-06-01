import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Page() {
    const supabase = createClient();
    const {data:{session}} = await supabase.auth.getSession();
    
    const signOut = async () => {
        'use server';
    
        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect('/');
      };
  return (
    session && (
        <>
            <div className='flex items-center justify-center p-2 w-full h-full'>
                <div className='flex flex-col items-center p-2 bg-white border-[2px] w-[90%] border-black rounded-md'>
                    <h1 className='text-3xl font-bold'>Welcome to JuanTask</h1>
                    <h1>{session.user.email}</h1>
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

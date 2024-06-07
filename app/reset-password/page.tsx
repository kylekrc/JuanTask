'use client';
import Header from '@/components/Header/Header';
import { resetPassword } from '@/functions/resetpassword';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ResetPassword({searchParams,}: {searchParams: { message: string; code: string };}) {
  const router = useRouter();
  const supabase = createClient();

  // Check if user is logged in
  const getUserSession = async() => {
    const {data: { session },} = await supabase.auth.getSession();
    if(session){
      router.push('/user');
    };
  };
  
  // Run once on component load
  useEffect(() => {
    getUserSession();
  },[]);

  return (
    <div>
      <Header />

      <Link
        href="/"
        className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover text-sm m-4"
      >
        Home
      </Link>

      <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
          action={resetPassword}
        >
          {/* <input type="text" value={searchParams.code} className='hidden' name='code'/> */}
          <label className="text-md" htmlFor="password">
            New Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <label className="text-md" htmlFor="password">
            Confirm New Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
          />
          <button className="bg-indigo-700 rounded-md px-4 py-2 text-foreground mb-2">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

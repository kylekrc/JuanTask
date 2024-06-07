'use client';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';
import { redirect, useRouter } from 'next/navigation';
import Header from '@/components/Header/Header';
import { useEffect } from 'react';
import { signUp } from '../../functions/signup';

export default function Signup({searchParams,}: {searchParams: { message: string };}) {
  const router = useRouter();
  const supabase = createClient();

  // Check if user is logged in
  const getUserSession = async() => {
    const {data: { session },} = await supabase.auth.getSession();
    if (session) {
            router.push('/user')
        };
    };
  
    // Run once on component load
    useEffect(() => {
        getUserSession();
    },[])


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
          action={signUp}
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <label className="text-md" htmlFor="password">
            Confirm Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
          />
          <button className="bg-green-700 text-white hover:bg-green-400 hover:text-black transition-all duration-200 ease-out rounded-md px-4 py-2 text-foreground mb-2">
            Sign up
          </button>

          {/* {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )} */}
        </form>

        <Link
          href="/login"
          className="rounded-md no-underline text-foreground text-sm"
        >
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
}

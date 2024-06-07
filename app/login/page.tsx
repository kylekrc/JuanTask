'use client'
import Header from "@/components/Header/Header";
import { signIn } from "../../functions/signin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import ToastLayout from "../essentials/ToastLayout";

export default function Login({searchParams,}: {searchParams: { message: string };}) {
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
    <ToastLayout>
      <div className='flex flex-col'>
        <div>
          <Header />
        </div>
        <div className='flex justify-center items-center w-full'>
          <div className='flex sm:w-[70%] rounded-md bg-white border border-black mt-5'>
            <div className='flex w-0 sm:w-1/2'>
              <img className='w-full' src="Login.png" alt="" />
            </div>
            <div className='flex flex-col items-center py-11 rounded-md px-2 justify-center w-full sm:w-1/2'>
              <h1 className='text-3xl font-bold py-2'>Login</h1>
              <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
                <form
                  className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
                  action={signIn}
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
                  <button className="bg-green-700 text-white hover:bg-green-400 hover:text-black transition-all duration-200 ease-out rounded-md px-4 py-2 text-foreground mb-1">
                    Sign In
                  </button>
                  <Link
                    href="/"
                    className="border border-green-700 bg-green-200 text-center text-black hover:bg-green-300 hover:text-black transition-all duration-200 ease-out rounded-md px-4 py-2 text-foreground"
                  >
                    Home
                  </Link>

                  {/* {searchParams?.message && (
                    <p className="mt-4 p-4 bg-foreground/10 text-foreground rounded-md   text-center">
                      {searchParams.message}
                    </p>
                  )} */}
                </form>

                <Link
                  href="/forgot-password"
                  className="rounded-md no-underline text-indigo-400 text-sm "
                >
                  Forgotten Password.
                </Link>

                <br />
                <br />

                <Link
                  href="/signup"
                  className="rounded-md no-underline text-foreground text-sm"
                >
                  Don't have an Account? Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToastLayout>
  );
}

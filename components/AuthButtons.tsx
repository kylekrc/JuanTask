'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';

export const AuthButtons = () => {

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
      <Link
        href="/login"
        className="rounded-xl hover:rounded-md text-center mt-0 transition-all duration-200 ease-out w-[10rem] text-white border border-green-500 bg-green-600 px-6 py-2.5 text-sm font-semibold shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="text-sm transition-all text-center mt-4 duration-200 font-semibold w-[10rem] hover:rounded-md leading-6 rounded-xl border border-green-500 py-2 px-6 hover:border-green-300"
      >
        Signup
      </Link>
    </div>
  );
};

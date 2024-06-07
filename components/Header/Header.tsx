'use client';
import { supabase } from "@/utils/supabase/SupabaseClient";
import { useEffect, useState } from "react";

export default function Header() {
  const [sessionData, setSessionData] = useState<any>(null);
  // Check if user is logged in
  const getUserSession = async() => {
    const {data:{session}} = await supabase.auth.getSession();
    if(session){
      setSessionData(session);
    };
  };
  // Run once on component load
  useEffect(() => {
    getUserSession();
  },)
  return (
    <div className='header px-5 py-3 h-[12%]'>
      <div className="flex justify-between w-full h-full">
        {sessionData && (
          <div className='flex justify-start w-[33%] sm:w-[4%]'>
            <img className="w-[50%] sm:hidden" src="JT.png" alt="" />
          </div>
        )}
        {!sessionData && (
          <div className='flex justify-start w-[33%] sm:w-[4%]'>
            <img className="w-[50%] sm:w-full" src="JT.png" alt="" />
          </div>
        )}
        <div className='flex w-[33%] sm:w-[4%]'>
        </div>
        <div className="flex justify-end w-[33%] sm:hidden">
          {sessionData && (
            <>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

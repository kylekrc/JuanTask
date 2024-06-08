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
    <div className='header px-5 py-3 h-[12%] max-h-[12%] min-h-[12%]'>
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
      </div>
    </div>
  );
}

'use client'
import Header from '@/components/Header/Header';
import { Hero } from '@/components/Hero';
import { supabase } from '@/utils/supabase/SupabaseClient';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();
  // Check if user is logged in
  const getUserSession = async() => {
    const {data:{session}} = await supabase.auth.getSession();
    if(session){
        router.push('/user')
    };
    if(!session){
        router.push('/');
    };
  };

  useEffect(() => {
    getUserSession();
  },[])
  return (
    <div>
      <Header />
      <Hero/>
    </div>
  );
}

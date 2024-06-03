import Header from '@/components/Header/Header';
import { Hero } from '@/components/Hero';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Index() {
  // Create supabase client
  const supabase = createClient();

  // Check for user sessions
  const {data} = await supabase.auth.getSession();
  if(data){
    if(data.session){
      return redirect('/dashboard');
    };
  };

  return (
    <div>
      <Header />
      <Hero/>
    </div>
  );
}

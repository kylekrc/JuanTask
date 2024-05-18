import Header from '@/components/Header/Header';
import { Hero } from '@/components/Hero';
import { createClient } from '@/utils/supabase/client';

var userSession:boolean;

export default async function Index() {
  const supabase = createClient();
  const getUserSession = async() => {
    const {data} = await supabase.auth.getSession();
    if(data){
      if(data.session){
        userSession = true;
      }
    }
  }
  return (
    <div>
      {userSession && (
        <Header />
      )}
      <Hero />
    </div>
  );
}

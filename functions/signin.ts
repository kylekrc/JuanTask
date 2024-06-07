'use client';
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export const signIn = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = createClient();

    const { data:{session} } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if(session){
      redirect('/user');
    }
    else{
      toast.error('Invalid login credentials');
    };
  };
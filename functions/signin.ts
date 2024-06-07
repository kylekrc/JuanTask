'use client';
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export const signIn = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      redirect(`/login?message=${error.message}`);
    }

    redirect('/user');
  };
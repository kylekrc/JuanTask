'use client';
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export const signUp = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    const supabase = createClient();

    if (password !== confirmPassword) {
      return redirect('/signup?message=Passwords do not match');
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      // options: {
      //   emailRedirectTo: `/auth/callback`,
      // },
    });

    if (error) {
      return redirect('/signup?message=Could not authenticate user');
    }

    return redirect(
      `/confirm?message=Check email(${email}) to continue sign in process`
    );
  };
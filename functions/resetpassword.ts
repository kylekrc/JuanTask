'use client';
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export const resetPassword = async (formData: FormData) => {
    const password = formData.get('password') as string;
    const code = formData.get('code') as string;
    const supabase = createClient();

    if (code) {
      const supabase = createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(
        code
      );

      if (error) {
        return redirect(
          `/reset-password?message=Unable to reset Password. Link expired!`
        );
      }
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      console.log(error);
      return redirect(
        `/reset-password?message=Unable to reset Password. Try again!`
      );
    }

    redirect(
      `/login?message=Your Password has been reset successfully. Sign in.`
    );
  };
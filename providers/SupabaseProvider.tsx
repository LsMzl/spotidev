"use client";

import { useState } from "react";
// Types
import { Database } from "@/types_db";
// Supabase
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface SupabaseProviderProps {
   children: React.ReactNode;
}

/**
 *
 * @param children
 */
const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
   const [supabaseClient] = useState(() =>
      createClientComponentClient<Database>()
   );

   return (
      <SessionContextProvider supabaseClient={supabaseClient}>
         {children}
      </SessionContextProvider>
   );
};

export default SupabaseProvider;

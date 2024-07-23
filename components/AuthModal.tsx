"use client";

import {
   useSessionContext,
   useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Modal } from "./Modal";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

export const AuthModal = () => {
   const supabaseClient = useSupabaseClient();
   const router = useRouter();
   const { session } = useSessionContext();
   const { onClose, isOpen } = useAuthModal();

   useEffect(() => {
      if (session) {
         router.refresh();
         onClose();
      }
   }, [session, router, onClose]);

   const onChange = (open: boolean) => {
      if (!open) {
         onClose();
      }
   };

   return (
      <Modal
         title="Bienvenue"
         description="Connectez-vous à votre compte"
         isOpen={isOpen}
         onChange={onChange}
      >
         <Auth
            supabaseClient={supabaseClient}
            theme="dark"
            localization={{
               variables: {
                  sign_in: {
                     email_label: "Email",
                     email_input_placeholder: "Adresse mail",
                     password_label: "Mot de passe",
                     password_input_placeholder: "*******",
                     button_label: "Connexion",
                     loading_button_label: "Chargement",
                     social_provider_text: `Se connecter avec {{provider}}`,
                     link_text: "Pas encore inscrit ? Inscription",
                  },
                  sign_up: {
                     email_label: "Email",
                     email_input_placeholder: "Adresse mail",
                     password_label: "Mot de passe",
                     password_input_placeholder: "*******",
                     button_label: "Inscription",
                  },
                  forgotten_password: {
                     email_label: "Email",
                     email_input_placeholder: "Adresse mail",
                     button_label: "Réinitialiser le mot de passe",
                  },
                  magic_link: {
                     link_text: "Recevoir un lien par email",
                     email_input_label: "Email",
                     email_input_placeholder: "Adresse mail",
                     button_label: "Envoyer",
                  },
               },
            }}
            magicLink
            providers={["github"]}
            appearance={{
               theme: ThemeSupa,
               variables: {
                  default: {
                     colors: {
                        brand: "#404040",
                        brandAccent: "#22c55e",
                     },
                  },
               },
            }}
         />
      </Modal>
   );
};

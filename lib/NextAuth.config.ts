import Credentials from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async function (userData) {

        console.log("Authorize Function Called with:", userData);

        let res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{

            method: "POST",

            body: JSON.stringify(userData),

            headers: {
              "Content-Type": "application/json",
            },
          },

        );
        
        let finalRes = await res.json();

        console.log("Authorize Function Response:", finalRes);

        if (finalRes.message === "success") {
    
          return {
            id:"",
            name: finalRes.user.name,
            email: finalRes.user.email,
            accessToken: finalRes.token
          };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut:"/login"
   
    
  },

  callbacks: {
    jwt(params) {
      
      if (params.user) {
        params.token.accessToken = params.user.accessToken;}
      return params.token;
    },

    session(params) {
      console.log("Session Callback Params:",params.session);
      


      return params.session;
    },
  },
  // secret : process.env.AUTH_SECRET,
  }

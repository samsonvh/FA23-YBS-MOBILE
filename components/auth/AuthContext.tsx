import React from "react";
import { useStorageState } from "./useStorageState";
import { handleLogin } from "requests/handleLogin";
import { authResponse, loginInformation } from "requests/interfaces";

const AuthContext = React.createContext<{
  signIn: ({ email, password }: loginInformation) => void;
  signOut: () => void;
  session?: authResponse | null;
  isLoading: boolean;
}>(null);

export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: async ({ email, password }) => {
          const authResponse = await handleLogin({ email, password });

          // Perform sign-in logic here
          if (authResponse) {
            const newSession = authResponse;
            setSession(newSession);
          }
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

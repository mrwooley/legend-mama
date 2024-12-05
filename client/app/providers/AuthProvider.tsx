"use client";
import { FirebaseApp, getApp, initializeApp } from "firebase/app";
import {
  Auth,
  GoogleAuthProvider,
  User,
  connectAuthEmulator,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { ReactNode, createContext, useMemo, useState } from "react";

/** These don't have to be secrets per docs: https://firebase.google.com/docs/projects/api-keys
 */
const firebaseConfig = {
  apiKey: "AIzaSyBijycU3ZdhZb06gmLz9oFTHCyjUXMFXoo",
  authDomain: "legend-mama-tavern.firebaseapp.com",
  projectId: "legend-mama-tavern",
  storageBucket: "legend-mama-tavern.appspot.com",
  messagingSenderId: "373053860621",
  appId: "1:373053860621:web:e973bfb5913118dcf35e44",
  measurementId: "G-2WYDLF8JMQ"
} as const;

interface AuthContextType {
  auth: Auth | null;
  loggedIn: boolean;
  providers: { google: GoogleAuthProvider | null };
  idToken: string | null;
  user: User | null;
  logoutAuth: () => Promise<void>;
}

const defaultContext: AuthContextType = {
  auth: null,
  loggedIn: false,
  user: null,
  idToken: null,
  providers: { google: null },
  logoutAuth: async () => {},
} as const;

export const AuthContext = createContext<AuthContextType>(defaultContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [context, setContext] = useState<AuthContextType>(() => {
    const ctx: AuthContextType = { ...defaultContext };
    let app: FirebaseApp;

    // Initialize Firebase auth
    // Try to ensure that we only initialize the Firebase app once - might need debugging

    try {
      app = getApp("legend-mama");
    } catch (err: any) {
      if (err.name === "FirebaseError") {
        app = initializeApp(firebaseConfig, "legend-mama");
      } else {
        throw err;
      }
    }

    ctx.auth = getAuth(app);

    // Initialize auth providers
    const googleAuthProvider = new GoogleAuthProvider();
    ctx.providers.google = googleAuthProvider;

    // Use emulator on local

    if (process.env.NODE_ENV === "development") {
      connectAuthEmulator(ctx.auth, "http://127.0.0.1:9099");
    }

    // Register auth observer
    onAuthStateChanged(ctx.auth, (user) => {
      if (user) {
        setContext((ctx) => ({ ...ctx, loggedIn: true }));
        setContext((ctx) => ({ ...ctx, user }));

        // Update gold balance & id token
        user.getIdToken().then((idToken) => {
          setContext((ctx) => ({ ...ctx, idToken }));
        });
      } else {
        setContext((ctx) => ({
          ...ctx,
          loggedIn: false,
          user: null,
          idToken: null,
        }));
      }
    });

    ctx.logoutAuth = async () => {
      await signOut(ctx.auth!);
      setContext((existing) => ({
        ...existing,
        loggedIn: false,
        user: null,
        idToken: null,
      }));
    };

    return ctx;
  });

  const contextMemo = useMemo(() => context, [context]);

  return (
    <AuthContext.Provider value={contextMemo}>{children}</AuthContext.Provider>
  );
}

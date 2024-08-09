import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      toast.success(`Welcome, ${session.user.name}!`);
    }
  }, [session]);

  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

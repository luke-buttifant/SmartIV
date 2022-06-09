import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
              <h1 className="text-4xl font-bold underline">
      Tailwind Active
    </h1>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
                  <h1 className="text-4xl font-bold underline">
      Tailwind Active
    </h1>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
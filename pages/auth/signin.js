import { getProviders, signIn, getSession } from "next-auth/react"
import { useState } from "react";

export default function SignIn({ providers }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) return false;

    signIn('email', { email, 
      callbackUrl: `${window.location.origin}/auth/verify-request`
    })
  }

  return (
    <>
      <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 min-h-screen">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div className="space-y-4">
                  <img src="/img/Logo.png" loading="lazy" className="w-36 mx-auto" alt="tailus logo" />
                  <h2 className="text-2xl text-cyan-900 font-bold text-center">Sign in to unlock the <br /> best of SmartIV.</h2>
                </div>
                <form onSubmit={handleSubmit} className="w-[100%]">
                <div className="mt-8 grid space-y-4">
                  
                    <input type="email" placeholder="Email Address..." onChange={e => setEmail(e.target.value)} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                      hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" />
                    <button type="submit" className="group h-12 px-6 border-2 border-yellow-300 rounded-full transition duration-300 
                      hover:border-red-400 focus:bg-blue-50 active:bg-blue-100 block font-semibold  text-yellow-300 text-sm hover:text-red-400 sm:text-base bg-red-400 hover:bg-yellow-300">Login</button>
                  
                  <hr></hr>
                  {Object.values(providers).map((provider) => {
                    if (provider.name != "Email") {
                      return (
                        <button key={provider.name} onClick={() => signIn(provider.id)} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                          hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                          <div className="relative flex items-center space-x-4 justify-center">
                            <img src={`/img/${provider.name.toLowerCase()}.svg`} className="absolute left-0 w-5" alt={`${provider.name} logo`} />
                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with {provider.name}</span>
                          </div>
                        </button>
                      )
                    }
                  })}
                </div>
                </form>

                <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p className="text-xs">By proceeding, you agree to our <a href="#" className="underline">Terms of Use</a> and confirm you have read our <a href="#" className="underline">Privacy and Cookie Statement</a>.</p>
                  <p className="text-xs">This site is protected by reCAPTCHA and the <a href="#" className="underline">Google Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const providers = await getProviders()
  return {
    props: { providers },
  }
}


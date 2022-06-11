import { useSession } from "next-auth/react"
import Navbar from "../../components/Navbars/IndexNavbar";

export default function VerifyRequest() {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
        return (
            <>
            <Navbar />
              <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 min-h-screen">
                <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40 mt-24">
                  <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-xl bg-white shadow-xl">
                      <div className="p-6 sm:p-16">
                        <div className="space-y-4 content-center">
                          <img src="/img/Logo.png" loading="lazy" className="w-36 mx-auto" alt="tailus logo" />
                          <h2 className="text-2xl text-cyan-900 font-bold text-center">Email Verified!</h2>
                          <div className="relative">
                          <a href="/" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-6 bg-slate-700 text-white active:bg-slate-600 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Continue</a>
                          </div>
                          
                        </div>
                            
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
    )}
  else{
    return( 
        <>
        <Navbar />
          <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 min-h-screen">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40 mt-24">
              <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div className="rounded-xl bg-white shadow-xl">
                  <div className="p-6 sm:p-16">
                    <div className="space-y-4">
                      <img src="/img/Logo.png" loading="lazy" className="w-36 mx-auto" alt="tailus logo" />
                      <h2 className="text-2xl text-cyan-900 font-bold text-center">Check your email for a sign in link!</h2>
                    </div>
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
}


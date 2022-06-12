import { SessionProvider } from "next-auth/react"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/globals.css'
import Head from "next/head"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
    <Head>
      <title>SmartIV</title>
      <meta name="title" content="SmartIV" />
      <meta name="description" content="An application that allows users to brush up on their interview skills using articial intelligence tools." />
      <meta name="keywords" content="Interview, interview practise, interview help, interview guidance, job help" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Luke Buttifant" />
    </Head>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </>
  )
}
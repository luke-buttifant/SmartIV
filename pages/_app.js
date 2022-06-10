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
    </Head>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </>
  )
}
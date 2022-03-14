import Context from '../src/Components/Context'
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Context>
        <Component {...pageProps} />
      </Context>
    </SessionProvider>
  )
}

export default MyApp

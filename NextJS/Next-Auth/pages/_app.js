import { SessionProvider } from 'next-auth/react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../components/Navbar.css'

function MyApp({ Component, pageProps }) {
  return (
<SessionProvider session={pageProps.session}>
{/* uses context under the hood and passess session value across the components 
 also , reduction in network calls and page flickers*/}
{/*Pageprops.session refer to the props returned from getServerSideProps(here from blog's page)
  using this we can reduce network calls and page flickers server side */}
  <Navbar />
  <Component {...pageProps} />
</SessionProvider>
  )
}

export default MyApp

import Navbar from "../components/Nav/Navbar.js";
import Head from 'next/head';
import '../styles/fonts.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Azat Valiev</title>
      <meta 
        name="description" 
        content={`
          Are you looking for a skilled Web Developer to build/improve your websites or applications?
          My name is Azat, and I've been doing just that for individuals and businesses for 4+ years
        `}/>

    </Head>
    <div className="app" >
      <Navbar/>
      <Component {...pageProps} />
    </div>

  </>
  
  )
}

export default MyApp

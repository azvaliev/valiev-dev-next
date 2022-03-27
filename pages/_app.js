import Navbar from "../components/Nav/Navbar.js";
import Head from 'next/head';
import '../styles/fonts.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <title>Azat Valiev</title>
      <meta 
        name="description" 
        content={`
          Are you looking for a skilled Web Developer to build/improve your websites or applications?
          My name is Azat, and I've been doing just that for individuals and businesses for 4+ years
        `}/>
      <link rel="icon" type="image/png" sizes="16x16" href='/img/logo.png' />
      <link rel="preconnect" href="https://fonts.googleapis.com"/> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/> 
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet"/>
    </Head>
    <div className="app" >
      <Navbar/>
      <Component {...pageProps} />
    </div>

  </>
  
  )
}

export default MyApp

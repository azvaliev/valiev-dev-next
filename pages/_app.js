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
      <title>Enhanced CEO</title>
      <meta name="description" content="Are you an entrepreneur looking to optimize productivity and get more out of your time? If so, look no further"/>
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

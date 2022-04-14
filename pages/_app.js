import Navbar from "../components/Nav/Navbar.js";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, createContext } from "react";
import "../styles/fonts.css";
import "../styles/globals.css";

export const Mobile = createContext();

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const updateIsMobile = () =>
			window.innerWidth < 1024 ? setIsMobile(true) : setIsMobile(false);

		window.addEventListener("resize", updateIsMobile);
		updateIsMobile();

		return () => window.removeEventListener("resize", updateIsMobile);
	}, []);

	return (
		<>
			<Head>
				<title>Azat Valiev - Web Developer</title>
				<meta
					name="description"
					content={`
          Are you looking for a skilled Web Developer to build/improve your websites or applications?
          My name is Azat, and I've been doing just that for individuals and businesses for 4+ years
        `}
				/>
			</Head>
			<div className="app">
				<Navbar page={router.pathname} />
				<Mobile.Provider value={isMobile}>
					<Component {...pageProps} />
				</Mobile.Provider>
			</div>
		</>
	);
}

export default MyApp;

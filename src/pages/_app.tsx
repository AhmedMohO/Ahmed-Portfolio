import Header from "@/components/UI/Header";
import NavBar from "@/components/UI/NavBar";
import "@/index.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Sora } from "next/font/google";
import Head from "next/head";

const sora = Sora({
	subsets: ["latin"],
	variable: "--font-sora",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="og:description"
					content="🚀Explore my projects, skills, and creative journey — all in one place"
				/>
				<meta property="og:image" content="/Bard_Generated_Image.png" />
				<link rel="icon" type="image/png" href="/Bard_Generated_Image.png" />
				<meta
					property="og:url"
					content="https://ahmed-port-folio.vercel.app/"
				/>
				<meta property="og:type" content="website" />
			</Head>
			<div className={`${sora.className} pt-30`}>
				<Header />
				<NavBar />
				<AnimatePresence mode="wait">
					<Component key={router.route} {...pageProps} />
				</AnimatePresence>
			</div>
		</>
	);
}

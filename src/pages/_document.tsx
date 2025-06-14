import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
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
				<link rel="preconnect" href="https://cdn.sanity.io" />
				<link rel="dns-prefetch" href="https://cdn.sanity.io" />
				<meta name="theme-color" content="#000000" />
			</Head>
			<body className="bg-cover min-h-screen bg-no-repeat">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

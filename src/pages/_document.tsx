import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
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

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="description"
					content="🚀Explore my projects, skills, and creative journey — all in one place"
				/>
				<meta content="Ahmed's Portfolio" property="og:site_name" />
				<meta property="og:image" content="/My_Icon.jpg" />

				<meta
					itemProp="description"
					content="🚀Explore my projects, skills, and creative journey — all in one place"
				/>
				<meta itemProp="image" content="My_Icon.jpg" />

				<meta
					property="og:url"
					content="https://ahmed-port-folio.vercel.app/"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="🚀Explore my projects, skills, and creative journey — all in one place"
				/>
				<meta property="og:image" content="My_Icon.jpg" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:description"
					content="🚀Explore my projects, skills, and creative journey — all in one place"
				/>
				<meta name="twitter:image" content="My_Icon.jpg" />

				<meta name="theme-color" content="#000000" />
				<meta property="og:type" content="website" />

				<link rel="icon" type="image/jpg" href="/My_Icon.jpg" />
				<link rel="preconnect" href="https://cdn.sanity.io" />
				<link rel="dns-prefetch" href="https://cdn.sanity.io" />
			</Head>
			<body className="bg-cover min-h-screen bg-no-repeat">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

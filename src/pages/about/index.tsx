import Curve from "@/components/Curve";
import Button from "@/components/UI/Button";
import SlideTaps from "@/components/UI/SlideTaps";
import Head from "next/head";
import { MdDownloadForOffline } from "react-icons/md";
import { motion } from "framer-motion";

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
				<meta name="twitter:title" content="About" />
				<meta property="og:title" content="About" />
				<meta itemProp="name" content="About" />
			</Head>
			<Curve>
				<main className="min-h-[calc(100vh-120px)] flex max-lg:flex-col gap-4 items-center">
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.76, duration: 0.6 }}
						className="flex flex-col gap-6 lg:max-w-1/2">
						<h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight md:leading-[1.3] max-lg:text-center">
							About Me – The
							<span className="text-[var(--main-color)]"> Journey</span> So Far
						</h1>{" "}
						<p className="max-lg:text-center text-gray-300">
							I’m a front-end developer with 3 years of experience With a
							background in business and finance, who loves turning ideas into
							sleek web apps. I bring strategy and creativity to every project.
							From building e-commerce sites with React and TypeScript to
							constantly learning what’s next, I’m all about crafting digital
							experiences that stand out and deliver real value.
						</p>
						<Button
							a
							target="_blank"
							classNamePropsTwo="!w-fit max-lg:mx-auto"
							link="https://drive.google.com/file/d/1ZAZqy3NFHBXhEcP896ZqfzxdZybyEKcb/view?usp=sharing">
							<MdDownloadForOffline className="text-2xl mr-2" />
							Download CV
						</Button>
					</motion.div>
					<SlideTaps />
				</main>
			</Curve>
		</>
	);
}

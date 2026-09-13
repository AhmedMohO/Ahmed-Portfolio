import Curve from "@/components/Curve";
import SlideTaps from "@/components/UI/SlideTaps";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticalesContainer = dynamic(
	() => import("@/components/ParticalesContainer"),
	{
		ssr: false,
	},
);

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
				<main className="min-h-[calc(100vh-120px)] flex flex-col lg:flex-row gap-10 items-center lg:items-start relative wrapepr pb-24">
					<ParticalesContainer />
					{/* Left Side: Avatar */}
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.76, duration: 0.6 }}
						className="relative flex-1 flex justify-center items-center mt-6 lg:mt-0 z-10">
						<div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
							<Image
								src="/photo_2026-04-17_22-36-17.jpg"
								alt="Ahmed Moh."
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								className="object-contain drop-shadow-[0_0_35px_rgba(226,117,0,0.15)] mix-blend-screen mix-blend-lighten z-10 rounded-full"
								priority
							/>
						</div>

						{/* View CV Ring Button */}
						<Link
							href="https://drive.google.com/file/d/1cCzztIu2_KpdJF7MivrwVS-oSd3rehMR/view?usp=drive_link"
							target="_blank"
							className="absolute -bottom-8 md:-bottom-15 flex flex-col justify-center items-center text-[15px] font-bold w-[115px] h-[115px] rounded-full border-[1.5px] border-[#d97c55]/80 bg-[#1c1314]/70 backdrop-blur-md hover:bg-[#d97c55]/20 hover:scale-105 transition-all duration-300 group z-20 text-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
							<span className="leading-tight">View</span>
							<span className="leading-tight">CV</span>
							<BsArrowRight className="text-2xl mt-1 group-hover:translate-x-1 text-white transition-transform duration-300" />
						</Link>
					</motion.div>

					{/* Right Side: Text & Tabs */}
					<motion.div
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.6 }}
						className="flex flex-col gap-6 flex-3 z-10">
						<h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight max-lg:text-center text-white tracking-tight">
							About Me – The{" "}
							<span className="text-[#e27500] drop-shadow-[0_0_10px_rgba(226,117,0,0.4)]">
								Journey
							</span>
							<br />
							So Far
						</h1>
						<div className="text-gray-300 text-sm md:text-[15px] leading-relaxed flex flex-col gap-4 max-lg:text-center md:max-w-[90%]">
							<p>
								Front-End Developer specializing in Next.js, React, TypeScript,
								and NestJS, with experience building high-performance, scalable
								web applications through clean architecture, RESTful APIs, and
								database integration. Comfortable leveraging AI-assisted development
								workflows to speed up delivery without compromising code quality.
							</p>
							<p>
								Combines strong front-end craftsmanship with a practical
								understanding of business processes, ERP systems, and financial
								operations, backed by a Bachelor of Commerce (Honors) and
								certifications in Business Administration, HR, and PFA.
							</p>
						</div>

						{/* Render Tabs */}
						<div className="w-full mt-4 md:max-w-[95%]">
							<SlideTaps />
						</div>
					</motion.div>
				</main>
			</Curve>
		</>
	);
}

import Head from "next/head";
import Curve from "@/components/Curve";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/UI/Button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { BsArrowRight } from "react-icons/bs";
import { FaUser, FaFolder } from "react-icons/fa";

const ParticalesContainer = dynamic(
	() => import("@/components/ParticalesContainer"),
	{
		ssr: false,
	},
);

const projects = [
	{
		name: "Project1",
		link: "https://cdn.sanity.io/images/z35qbzq4/production/c0dee05b9f0b2171b011383a8d05efd070e17204-640x360.webp",
	},
	{
		name: "Project2",
		link: "https://cdn.sanity.io/images/z35qbzq4/production/4ae5706bac4319db571c2f9e27d9fcfba038c22f-640x360.webp",
	},
	{
		name: "Project3",
		link: "https://cdn.sanity.io/images/z35qbzq4/production/704a3e68893df2ff9322ead35423884bceb73e88-640x360.webp",
	},
	{
		name: "Project4",
		link: "https://cdn.sanity.io/images/z35qbzq4/production/09a6cce7bcd03ed17ecf1722048f75174c8a232a-640x360.webp",
	},
];
export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name="twitter:title" content="Home" />
				<meta property="og:title" content="Home" />
				<meta itemProp="name" content="Home" />
			</Head>
			<Curve>
				<main className="min-h-[calc(100vh-120px)] flex flex-col md:flex-row gap-14 justify-center items-center relative">
					<ParticalesContainer />

					{/* Left Side: Gallery and Quick Stats */}
					<div className="order-2 md:order-1 flex-2 flex flex-col justify-between w-full relative z-10 gap-8">
						<motion.div
							initial={{ x: -20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.76, duration: 0.6 }}
							className="bg-white/5 backdrop-blur-md border border-white/5 rounded-3xl w-full p-5 hidden md:block">
							<h1 className="text-center text-white mb-4 text-xl font-medium tracking-wide">
								Professional & Friendly
							</h1>
							<div className="grid grid-cols-2 gap-4">
								{projects.map((project) => (
									<Image
										key={project.name}
										src={`${project.link}`}
										width={320}
										height={180}
										priority
										alt={`${project.name}`}
										className="rounded-xl w-full h-full object-cover shadow-lg border border-white/10 opacity-80 hover:opacity-100 transition-opacity duration-300"
									/>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.8, duration: 0.6 }}
							className="relative w-full">
							<h3 className="text-xl font-bold mb-3 text-white max-md:text-center">
								Quick Stats
							</h3>
							<div className="flex gap-4 max-sm:flex-col">
								{/* Quick Stat 1 */}
								<div className="bg-[#1f2038] rounded-[1rem] p-5 flex-1 flex flex-col gap-3">
									<div className="flex items-center gap-4">
										<div className="bg-[var(--main-color)] bg-gradient-to-b from-[#f28e2c] to-[var(--main-color)] p-3 rounded-2xl w-16 h-16 flex items-center justify-center text-white shadow-md">
											<FaUser size={30} />
										</div>
										<div className="text-[2.7rem] leading-none font-bold text-white tracking-wide">
											3+
										</div>
									</div>
									<div className="text-[1.1rem] text-gray-300 font-medium">
										<span className="text-[#de6810]">Years</span> Experience
									</div>
								</div>

								{/* Quick Stat 2 */}
								<div className="bg-[#1f2038] rounded-[1rem] p-5 flex-1 flex flex-col gap-3">
									<div className="flex items-center gap-4">
										<div className="bg-[var(--main-color)] bg-gradient-to-b from-[#f28e2c] to-[var(--main-color)] p-3 rounded-2xl w-16 h-16 flex items-center justify-center text-white shadow-md">
											<FaFolder size={30} />
										</div>
										<div className="text-[2.7rem] leading-none font-bold text-white tracking-wide">
											10+
										</div>
									</div>
									<div className="text-[1.1rem] text-gray-300 font-medium">
										<span className="text-[#de6810]">Projects</span> Completed
									</div>
								</div>
							</div>

							{/* Circular My Projects Button */}
							<Link
								href="/work"
								className="hidden xl:flex flex-col justify-center items-center text-[15px] font-bold absolute -top-16 -right-10 w-[115px] h-[115px] rounded-full border-[1.5px] border-[#d97c55]/80 bg-[#1c1314]/60 backdrop-blur-sm hover:bg-[#d97c55]/20 hover:scale-105 transition-all duration-300 group z-20 text-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
								<span className="leading-tight">My</span>
								<span className="leading-tight">Projects</span>
								<BsArrowRight className="text-2xl mt-1 group-hover:translate-x-1 text-white transition-transform duration-300" />
							</Link>
						</motion.div>
					</div>

					{/* Right Side: Text & CTA */}
					<div className="order-1 md:order-2 flex-2 flex flex-col gap-6 relative z-10 md:items-start justify-center text-center md:text-left pt-6 md:pt-0">
						<motion.h1
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.76, duration: 0.6 }}
							className="text-[2.2rem] sm:text-5xl lg:text-[4rem] font-bold leading-tight lg:leading-[1.1] tracking-tight">
							<span className="text-[var(--main-color)] block drop-shadow-[0_0_15px_var(--main-color)]">
								Transforming Ideas
							</span>
							Into Digital Reality
						</motion.h1>
						<motion.p
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.8, duration: 0.6 }}
							className="text-gray-300 text-sm md:text-base lg:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
							Hey, I am a front-end developer with a background in business and
							finance, passionate about building clean, responsive web apps
							using React and TypeScript. I enjoy turning ideas into functional,
							user-focused experiences, and I&apos;m always learning to grow my
							skills and make an impact through code.
						</motion.p>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.84, duration: 0.6 }}
							className="w-full md:w-fit flex justify-center mt-2 group">
							<Button
								li
								link="/about"
								classNamePropsTwo="!w-fit !h-fit !rounded-xl !overflow-visible p-[2px] bg-gradient-to-r from-[var(--main-color)] to-[var(--secondary-color)] shadow-[0_0_15px_rgba(226,117,0,0.4)] group-hover:shadow-[0_0_25px_rgba(226,117,0,0.6)] transition-all duration-300"
								classNameProps="bg-gradient-to-r from-[#de6810] to-[#e47600] !px-6 !py-3 !rounded-[10px] sm:text-lg font-bold gap-3 text-white justify-center items-center shadow-inner">
								About Me{" "}
								<BsArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
							</Button>
						</motion.div>
					</div>
				</main>
			</Curve>
		</>
	);
}

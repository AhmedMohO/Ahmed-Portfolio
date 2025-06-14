import Head from "next/head";
import Curve from "@/components/Curve";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { MdDownloadForOffline } from "react-icons/md";
import Button from "@/components/UI/Button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticalesContainer = dynamic(
	() => import("@/components/ParticalesContainer"),
	{
		ssr: false,
	}
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
			</Head>
			<Curve>
				<main className="min-h-[calc(100vh-120px)] flex max-lg:flex-col gap-4 items-center justify-center">
					<ParticalesContainer />
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.76, duration: 0.6 }}
						className="flex flex-col gap-6 lg:max-w-1/2">
						<h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight md:leading-[1.3] max-lg:text-center">
							Transforming Ideas Into
							<span className="text-[var(--main-color)]"> Digital Reality</span>
						</h1>
						<p className="max-lg:text-center text-gray-300">
							Hey, I am a front-end developer with a background in business and
							finance, passionate about building clean, responsive web apps
							using React and TypeScript. <br /> I enjoy turning ideas into
							functional, user-focused experiences, and I&apos;m always learning
							to grow my skills and make an impact through code.
						</p>
						<div className="mx-auto lg:ms-0">
							<div className="flex items-center gap-5">
								<Link
									href="/work"
									className="relative w-[145px] h-[145px] p-2 flex justify-center items-center bg-cover bg-center bg-no-repeat group border border-gray-300 rounded-full">
									<Image
										src={"/rounded-text.png"}
										width={127}
										height={133}
										alt="My projects"
										className="slow-spin w-full h-full"
									/>
									<HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
								</Link>
								<Button
									a
									target="_blank"
									classNameProps="max-sm:text-sm"
									link="https://drive.google.com/file/d/1ZAZqy3NFHBXhEcP896ZqfzxdZybyEKcb/view?usp=sharing">
									<MdDownloadForOffline className="text-2xl mr-2" />
									Download CV
								</Button>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.76, duration: 0.6 }}
						className="bg-red-200/10 rounded-2xl w-full md:min-w-lg p-4 hidden md:block">
						<h1 className="text-center text-[var(--main-color)] mb-2 text-3xl font-bold">
							Bold & Confident
						</h1>
						<div className="grid grid-cols-2 gap-4">
							{projects.map((project) => (
								<Image
									key={project.name}
									src={`${project.link}`}
									width={640}
									height={360}
									alt={`${project.name}`}
									className="rounded-xl w-full h-full object-cover"
								/>
							))}
						</div>
					</motion.div>
				</main>
			</Curve>
		</>
	);
}

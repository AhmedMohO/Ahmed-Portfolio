import { AnimatePresence, motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import {
	SiNextdotjs,
	SiFramer,
	SiTypescript,
	SiTailwindcss,
	SiMongodb,
	SiNestjs,
	SiExpress,
	SiGsap,
} from "react-icons/si";
import { memo, useEffect, useRef, useState, ReactNode } from "react";
import Tap from "./Tap";

interface TechIcon {
	name: string;
	icon: ReactNode;
}

interface InfoItem {
	title: string;
	stage?: string;
	description?: string;
	icons?: TechIcon[];
}

interface TabData {
	title: string;
	info: InfoItem[];
}

export default memo(function SlideTaps() {
	const prevLeftPositionRef = useRef(0);
	const activeTabRef = useRef<{
		left: number;
		width: number;
		top: number;
		height: number;
	}>({ left: 0, width: 0, top: 0, height: 0 });
	const [activeTab, setActiveTab] = useState(0);
	const [position, setPosition] = useState({
		width: 0,
		left: 0,
		top: 0,
		height: 0,
	});
	const [currentPosition, setCurrentPosition] = useState({
		width: 0,
		left: 0,
		top: 0,
		height: 0,
	});

	useEffect(() => {
		prevLeftPositionRef.current = position.left;
	}, [position]);

	useEffect(() => {
		activeTabRef.current = currentPosition;
	}, [currentPosition]);

	useEffect(() => {
		const initializeTabPositions = () => {
			const timer = setTimeout(() => {
				setPosition(activeTabRef.current);
			}, 100);

			return () => clearTimeout(timer);
		};

		initializeTabPositions();
	}, []);

	const handleResetPosition = () => {
		setPosition(activeTabRef.current);
	};

	const handleTabClick = (tabName: number) => {
		setActiveTab(tabName);
	};
	return (
		<motion.div
			initial={{ x: 20, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ delay: 0.76, duration: 0.6 }}
			className="w-full flex flex-col items-start">
			<ul
				onMouseLeave={handleResetPosition}
				className="flex items-center relative w-full sm:w-auto mb-4 bg-white/5 rounded-xl overflow-hidden flex-wrap">
				{aboutData.map((data, index) => (
					<Tap
						key={index}
						isActive={activeTab === index}
						onClick={() => handleTabClick(index)}
						setPosition={setPosition}
						setCurrentPosition={setCurrentPosition}>
						{data.title}
					</Tap>
				))}
				<motion.div
					animate={position}
					transition={{ type: "spring", stiffness: 400, damping: 30 }}
					className="absolute z-0 bg-main rounded-lg shadow-[0_0_12px_rgba(226,117,0,0.5)]"
				/>
			</ul>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							delay: 0.76,
							when: "beforeChildren",
							staggerChildren: 0.2,
							delayChildren: 0.1,
						},
					},
				}}
				className="flex flex-col gap-y-3 w-full">
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.2,
									delayChildren: 0.1,
								},
							},
						}}
						className="w-full">
						<div className="flex flex-col gap-3 w-full h-full max-h-96 overflow-y-auto pr-2 custom-scrollbar overflow-x-hidden">
							{aboutData[activeTab].info.map((item, index) => (
								<motion.div
									key={index}
									variants={{
										hidden: { opacity: 0, y: -10 },
										visible: {
											opacity: 1,
											y: 0,
										},
									}}
									transition={{
										duration: 0.3,
										ease: "easeOut",
									}}
									className="flex flex-col md:flex-row justify-between items-center gap-y-2 gap-x-4 py-3.5 px-5 w-full bg-background/70 border border-white/10 group backdrop-blur-sm rounded-xl text-gray-300 shadow-lg hover:shadow-[0_0_12px_rgba(226,117,0,0.5)] hover:bg-main hover:text-white transition-all duration-300">
									<div className="flex flex-col text-center md:text-left gap-1 flex-1">
										<div className="font-medium text-white/90 group-hover:text-white text-sm sm:text-base">
											{item.title}
										</div>
										{item.description && (
											<div className="text-xs text-gray-400 group-hover:text-white/90 leading-relaxed max-w-2xl">
												{item.description}
											</div>
										)}
									</div>
									<div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 shrink-0">
										{item.stage && (
											<div className="text-sm text-gray-400 group-hover:text-white whitespace-nowrap font-medium">
												{item.stage}
											</div>
										)}
										{item.icons && (
											<div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
												{item.icons.map((tech, idx) => (
													<div
														key={idx}
														className="relative group/icon flex items-center justify-center">
														<div className="text-xl sm:text-2xl text-white/80 group-hover:text-white group-hover/icon:!text-background group-hover/icon:scale-125 transition-all duration-200 cursor-pointer">
															{tech.icon}
														</div>

														{/* Tooltip Popup */}
														<div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-background text-white text-xs font-semibold tracking-wide rounded-md border border-white/15 opacity-0 invisible -translate-y-1 group-hover/icon:opacity-100 group-hover/icon:visible group-hover/icon:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap z-50">
															{tech.name}
															<span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-background border-r border-b border-white/15 rotate-45" />
														</div>
													</div>
												))}
											</div>
										)}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</AnimatePresence>
			</motion.div>
		</motion.div>
	);
});

const aboutData: TabData[] = [
	{
		title: "skills",
		info: [
			{
				title: "Full-Stack Development",
				stage: "Core Stack",
				description:
					"Next.js, React, TypeScript, NestJS, Express.js, Tailwind CSS, GSAP & Node.js",
				icons: [
					{ name: "React", icon: <FaReact key="react" /> },
					{ name: "Next.js", icon: <SiNextdotjs key="nextjs" /> },
					{ name: "TypeScript", icon: <SiTypescript key="ts" /> },
					{ name: "Tailwind CSS", icon: <SiTailwindcss key="tailwind" /> },
					{ name: "NestJS", icon: <SiNestjs key="nestjs" /> },
					{ name: "Express.js", icon: <SiExpress key="express" /> },
				],
			},
			{
				title:
					"React, Next.js, Vue, Angular, Tailwind CSS, Motion, GSAP, Shadcn",
				stage: "Frontend Ecosystem",
			},
			{
				title:
					"NestJS, Express.js, Node.js, REST APIs, GraphQL, MongoDB, MySQL",
				stage: "Backend & Data",
				icons: [
					{ name: "NestJS", icon: <SiNestjs key="nestjs" /> },
					{ name: "Express.js", icon: <SiExpress key="express" /> },
					{ name: "Node.js", icon: <FaNodeJs key="node" /> },
					{ name: "MongoDB", icon: <SiMongodb key="mongodb" /> },
				],
			},
			{
				title: "React Query, Redux Toolkit, Axios, Zod, React Hook Form",
				stage: "State & Data Fetching",
			},
			{
				title: "TypeScript, JavaScript, Python, C, C++, Java, OOP & DSA",
				stage: "Languages & CS",
			},
			{
				title: "Git, Docker, Vercel, Figma, Sketch, Clerk, PayPal SDK",
				stage: "DevOps & Tools",
				icons: [
					{ name: "Git", icon: <FaGitAlt key="git" /> },
					{ name: "Docker", icon: <FaDocker key="docker" /> },
					{ name: "Tailwind CSS", icon: <SiTailwindcss key="tailwind" /> },
					{ name: "Framer Motion", icon: <SiFramer key="framer" /> },
				],
			},
			{
				title: "AI Tools – GitHub Copilot & Cursor (AI-Assisted Workflows)",
				stage: "Accelerated Dev",
			},
			{
				title: "Arabic (Native Speaker) • English (B2)",
				stage: "Languages",
			},
		],
	},
	{
		title: "experience",
		info: [
			{
				title: "Zakham Company – Front-End Developer",
				stage: "Sep 2025 – May 2026",
				description:
					"Delivered 5 client projects using Next.js App Router, integrated 96+ REST APIs with Axios & React Query (auth, RBAC), and built a reusable library of 70+ Tailwind components.",
			},
			{
				title: "AuraPC – AI-Powered PC Market Intelligence SaaS",
				stage: "May 2026 – Present",
				description:
					"Architected a multi-tenant platform with Next.js 16, React 19, TypeScript & MongoDB. Built a RAG pipeline (Vercel AI SDK, Pinecone), LLM function calling, and Puppeteer background scrapers.",
			},
			{
				title: "Meshwark – Public Transportation Tracker",
				stage: "Aug 2025",
				description:
					"Led and mentored 7 developer trainees in React best practices; engineered an admin dashboard achieving a 90 Lighthouse score with optimized SEO.",
			},
			{
				title: "E-Commerce Website – Digital Gift Cards",
				stage: "Mar 2025 – Apr 2025",
				description:
					"Built full-stack digital gaming store listing 17+ products with React, TypeScript, Redux Toolkit, Clerk authentication, and PayPal payment integration.",
			},
			{
				title: "Egyptian Information Technology Foundation (INFC)",
				stage: "Apr 2022 – Sep 2024",
				description:
					"Extensive web development foundational experience and practical project execution.",
			},
		],
	},
	{
		title: "education",
		info: [
			{
				title: "ITI – Professional Training Program (Open Source Track)",
				stage: "Nov 2025 – Aug 2026",
				description:
					"Information Technology Institute (ITI): Intensive 9-month program covering 25+ technologies including React, Next.js, Node.js, NestJS, MongoDB, MySQL, Docker, OOP, DSA, and Software Architecture.",
			},
			{
				title:
					"Mansoura University – Faculty of Commerce (Bachelor of Commerce)",
				stage: "2021 – 2025",
				description:
					"Graduated July 2025 with Honors. Strong analytical background in accounting, finance, business management, economics, and strategic decision-making.",
			},
		],
	},
	{
		title: "Certifications",
		info: [
			{
				title: "MongoDB Associate Developer Node.js – MongoDB",
				stage: "Dec 2025",
			},
			{
				title:
					"Front-End React Training – Information Technology Institute (ITI)",
				stage: "Jul 2025 – Sep 2025",
			},
			{
				title: "IELTS – Infinity Academy",
				stage: "Apr 2025 – Jun 2025",
			},
			{
				title: "PFA and ERP Software Systems – Dakahlia Commercial Syndicate",
				stage: "Sep 2024 – Oct 2024",
			},
			{
				title: "Electronic Accounting – Mansoura University",
				stage: "Sep 2023 – Dec 2023",
			},
			{
				title:
					"Internal Core Competency Certification (IC3) – Mansoura University",
				stage: "Aug 2023 – Oct 2023",
			},
			{
				title:
					"Human Resources and Business Administration – Mansoura University",
				stage: "Jun 2023 – Aug 2023",
			},
		],
	},
	{
		title: "Courses",
		info: [
			{
				title: "React JS and Next JS – Udemy (Maximilian Schwarzmüller)",
				stage: "Feb 2024 – Feb 2025",
			},
			{
				title: "Front-End Developer – Elzero Web School",
				stage: "Feb 2022 – Jun 2023",
			},
		],
	},
];

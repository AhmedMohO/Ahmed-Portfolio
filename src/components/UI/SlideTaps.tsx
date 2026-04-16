import { AnimatePresence, motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiFramer } from "react-icons/si";
import { memo, useEffect, useRef, useState, ReactNode } from "react";
import Tap from "./Tap";

interface InfoItem {
	title: string;
	stage?: string;
	icons?: ReactNode[];
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
	const [position, setPosition] = useState({ width: 0, left: 0, top: 0, height: 0 });
	const [currentPosition, setCurrentPosition] = useState({ width: 0, left: 0, top: 0, height: 0 });

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
					className="absolute z-0 bg-[#e27500] rounded-lg shadow-[0_0_12px_rgba(226,117,0,0.5)]"
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
						<div className="flex flex-col gap-3 w-full h-full max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
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
									className="flex flex-col md:flex-row justify-between items-center gap-y-2 py-4 px-6 md:px-5 w-full bg-[#18131e]/70 border border-white/5 group backdrop-blur-sm rounded-[12px] text-gray-300 shadow-lg hover:shadow-[0_0_12px_rgba(226,117,0,0.5)] hover:bg-[#e27500] transition-all duration-300">
									<div className="font-medium text-white/90 text-center md:text-left max-md:text-[15px]">
										{item.title}
									</div>
									<div className="text-sm text-gray-400 group-hover:text-white whitespace-nowrap">
										{item.stage}
									</div>
									{item.icons && (
										<div className="flex gap-x-4">
											{item.icons.map((icon, idx) => (
												<div
													key={idx}
													className="text-[26px] text-white/80 hover:text-[var(--main-color)] transition-colors">
													{icon}
												</div>
											))}
										</div>
									)}
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
				title: "Web Development",
				icons: [
					<FaHtml5 key="html5" />,
					<FaCss3 key="css3" />,
					<FaJs key="js" />,
					<FaReact key="react" />,
					<SiNextdotjs key="nextjs" />,
					<SiFramer key="framer" />,
				],
			},
			{
				title: "Language - Arabic",
				stage: "Native Speaker",
			},
			{
				title: "Language - English",
				stage: "Highly Proficient (B2 English)",
			},
		],
	},
	{
		title: "education",
		info: [
			{
				title: "Mansoura University - Faculty of Commerce",
				stage: "2021 - 2025",
			},
			{
				title: "Bachelor of Commerce",
				stage: "Graduated With Honor Degree",
			},
		],
	},
	{
		title: "experience",
		info: [
			{
				title: "Meshwark Project (Public Transportation Tracker)",
				stage: "Aug 2025 - Aug 2025",
			},
			{
				title: "E-Commerce Website for Digital Gift Cards",
				stage: "Mar 2025 - Apr 2025",
			},
			{
				title: "Awwards Website",
				stage: "Jan 2025 - Feb 2025",
			},
			{
				title: "Eshada Energy Website",
				stage: "Jan 2023 - Feb 2023",
			},
			{
				title: "Working in Egyptian Information Technology Foundation (INFC)",
				stage: "Apr 2022 - Sep 2024",
			},
		],
	},
	{
		title: "Certifications & Courses",
		info: [
			{
				title: "Front End (React Track)",
				stage: "July 2025 - Sep 2025",
			},
			{
				title: "IELTS Course",
				stage: "Apr 2025 - Jun 2025 ",
			},
			{
				title: "React JS & Next JS",
				stage: "Feb 2024 - Feb 2025",
			},
			{
				title: "Internal Core Competency Certification IC3",
				stage: "Aug 2023 - Oct 2023",
			},
			{
				title: "Human Resources & Business Administration",
				stage: "Jun 2023 - Aug 2023",
			},
			{
				title: "Front-End",
				stage: "Feb 2022 - Jun 2023 ",
			},
		],
	},
];

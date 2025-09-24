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
	}>({ left: 0, width: 0 });
	const [activeTab, setActiveTab] = useState(0);
	const [position, setPosition] = useState({ width: 0, left: 0 });
	const [currentPosition, setCurrentPosition] = useState({ width: 0, left: 0 });

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
			className="min-h-[320px] md:h-[320px] w-full flex flex-col items-center">
			<ul
				onMouseLeave={handleResetPosition}
				className={
					"flex items-center justify-center relative w-fit rounded-full"
				}>
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
					className={`absolute z-0 h-10 w-36 bg-[var(--secondary-color)] ${
						prevLeftPositionRef.current < position.left
							? "-skew-x-12"
							: "skew-x-12"
					}  self-center transition-transform duration-400`}
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
				className="py-2 xl:py-6 max-md:pb-22 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start w-full">
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
						{aboutData[activeTab].info.map((item, index) => (
							<motion.div
								key={index}
								variants={{
									hidden: { opacity: 0, y: -20 },
									visible: {
										opacity: 1,
										y: 0,
									},
								}}
								transition={{
									duration: 0.3,
									ease: "easeOut",
								}}
								className="flex flex-col flex-wrap justify-between md:flex-row gap-x-2 py-1 items-center w-full border-b text-white/60">
								<div className="font-light mb-2 md:mb-0">{item.title}</div>
								<div className="">{item.stage}</div>
								{item.icons && (
									<div className="flex gap-x-4">
										{item.icons.map((icon, index) => (
											<div key={index} className="text-2xl text-white">
												{icon}
											</div>
										))}
									</div>
								)}
							</motion.div>
						))}
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

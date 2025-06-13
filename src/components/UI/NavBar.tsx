import Link from "next/link";
import Magnetic from "@/components/UI/Magnatic";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { TbInfoOctagon } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { SiWorkplace } from "react-icons/si";
import { motion } from "framer-motion";

function NavBar() {
	const pathname = usePathname();

	const containerVariants = {
		hidden: {
			right: -200,
			transition: {
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
		visible: {
			right: 0,
			transition: {
				duration: 0.6,
				staggerChildren: 0.2,
				delayChildren: 0.76,
			},
		},
	};

	const itemVariants = {
		hidden: {
			opacity: 0,
			x: 50,
			transition: {
				duration: 0.2,
			},
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut",
			},
		},
	};

	return (
		<nav>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="hidden fixed md:grid gap-3 lg:gap-6 right-1 top-1/2 -translate-y-1/2 z-30 text-xs">
				<motion.div variants={itemVariants}>
					<Link href="/">
						<Magnetic
							className={`bg-[var(--main-color)] p-1.5 pr-1.5 lg:p-4 lg:pr-2 rounded-l-3xl before:absolute before:bottom-0 before:left-0 before:right-0 overflow-hidden before:h-0 before:w-full before:transition-all before:duration-300 before:ease-in-out ${
								pathname === "/" ? "active" : ""
							}`}>
							<div className="grid justify-items-center">
								<AiOutlineHome className="text-lg lg:text-2xl" />
								Home
							</div>
						</Magnetic>
					</Link>
				</motion.div>
				<motion.div variants={itemVariants}>
					<Link href="/about">
						<Magnetic
							className={`bg-[var(--main-color)] p-1.5 pr-1.5 lg:p-4 lg:pr-2 rounded-l-3xl before:absolute before:bottom-0 before:left-0 before:right-0 overflow-hidden before:h-0 before:w-full before:transition-all before:duration-300 before:ease-in-out ${
								pathname === "/about" ? "active" : ""
							}`}>
							<div className="grid justify-items-center">
								<TbInfoOctagon className="text-lg lg:text-2xl" />
								About
							</div>
						</Magnetic>
					</Link>
				</motion.div>
				<motion.div variants={itemVariants}>
					<Link href="/work">
						<Magnetic
							className={`bg-[var(--main-color)] p-1.5 pr-1.5 lg:p-4 lg:pr-2 rounded-l-3xl before:absolute before:bottom-0 before:left-0 before:right-0 overflow-hidden before:h-0 before:w-full before:transition-all before:duration-300 before:ease-in-out ${
								pathname === "/work" ? "active" : ""
							}`}>
							<div className="grid justify-items-center">
								<SiWorkplace className="text-lg lg:text-2xl" />
								<span className=""> Work</span>
							</div>
						</Magnetic>
					</Link>
				</motion.div>
				<motion.div variants={itemVariants}>
					<Link href="/contact">
						<Magnetic
							className={`bg-[var(--main-color)] p-1.5 pr-1.5 lg:p-4 lg:pr-2 rounded-l-3xl before:absolute before:bottom-0 before:left-0 before:right-0 overflow-hidden before:h-0 before:w-full before:transition-all before:duration-300 before:ease-in-out ${
								pathname === "/contact" ? "active" : ""
							}`}>
							<div className="grid justify-items-center">
								<TiMessages className="text-lg lg:text-2xl" />
								Contact
							</div>
						</Magnetic>
					</Link>
				</motion.div>
			</motion.div>
			<motion.div
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.76, duration: 0.6 }}
				className="fixed p-3 mx-2 flex justify-between items-center bottom-5 left-0 right-0 md:hidden bg-gray-200/30 text-blue-100 rounded-4xl z-20">
				<Link className={`${pathname === "/" ? "active-m" : ""}`} href="/">
					<div className="grid justify-items-center">
						<AiOutlineHome className="text-lg lg:text-2xl" />
						<span className=""> Home</span>
					</div>
				</Link>
				<Link
					className={`${pathname === "/about" ? "active-m" : ""}`}
					href="/about">
					<div className="grid justify-items-center">
						<TbInfoOctagon className="text-lg lg:text-2xl" />
						<span className=""> About</span>
					</div>
				</Link>
				<Link
					className={`${pathname === "/work" ? "active-m" : ""}`}
					href="/work">
					<div className="grid justify-items-center">
						<SiWorkplace className="text-lg lg:text-2xl" />
						<span className=""> Work</span>
					</div>
				</Link>
				<Link
					className={`${pathname === "/contact" ? "active-m" : ""}`}
					href="/contact">
					<div className="grid justify-items-center">
						<TiMessages className="text-lg lg:text-2xl" />
						<span className=""> Contact</span>
					</div>
				</Link>
			</motion.div>
		</nav>
	);
}

export default NavBar;

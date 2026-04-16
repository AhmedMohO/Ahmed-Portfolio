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
							className={`bg-[var(--main-color)] p-3 pr-1.5 lg:p-4 lg:pr-2 rounded-l-3xl before:absolute before:bottom-0 before:left-0 before:right-0 overflow-hidden before:h-0 before:w-full before:transition-all before:duration-300 before:ease-in-out ${
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
							className={`bg-[var(--main-color)] p-3 pr-1.5 lg:p-4 lg:pr-2 rounded-l-3xl before:absolute before:bottom-0 before:left-0 before:right-0 overflow-hidden before:h-0 before:w-full before:transition-all before:duration-300 before:ease-in-out ${
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
							className={`bg-[var(--main-color)] p-3 pr-1.5 lg:p-4 lg:pr-2 rounded-l-3xl before:absolute before:bottom-0 before:left-0 before:right-0 overflow-hidden before:h-0 before:w-full before:transition-all before:duration-300 before:ease-in-out ${
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
							className={`bg-[var(--main-color)] p-3 pr-1.5 lg:p-4 lg:pr-2 rounded-l-3xl before:absolute before:bottom-0 before:left-0 before:right-0 overflow-hidden before:h-0 before:w-full before:transition-all before:duration-300 before:ease-in-out ${
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
				initial={{ y: 30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.76, duration: 0.6 }}
				className="fixed pb-2 pt-3 px-6 mx-4 flex justify-between items-end bottom-5 left-0 right-0 md:hidden bg-[#1c1a29]/95 border border-white/10 backdrop-blur-xl text-gray-400 rounded-[24px] z-50 shadow-2xl">
				
				<Link href="/" className="relative flex flex-col items-center w-12">
					<div className={`transition-all duration-300 flex items-center justify-center ${pathname === "/" ? "w-12 h-12 rounded-full bg-gradient-to-t from-[#de6810] to-[#f28e2c] text-white shadow-[0_0_15px_rgba(226,117,0,0.6)] absolute -top-9 z-10" : "text-[22px] relative"}`}>
						<AiOutlineHome className={pathname === "/" ? "text-[26px]" : ""} />
					</div>
					<span className={`text-[11px] font-medium transition-all duration-300 ${pathname === "/" ? "mt-4 text-[var(--main-color)]" : "mt-1"}`}>
						Home
					</span>
				</Link>
				
				<Link href="/about" className="relative flex flex-col items-center w-12">
					<div className={`transition-all duration-300 flex items-center justify-center ${pathname === "/about" ? "w-12 h-12 rounded-full bg-gradient-to-t from-[#de6810] to-[#f28e2c] text-white shadow-[0_0_15px_rgba(226,117,0,0.6)] absolute -top-9 z-10" : "text-[22px] relative"}`}>
						<TbInfoOctagon className={pathname === "/about" ? "text-[26px]" : ""} />
					</div>
					<span className={`text-[11px] font-medium transition-all duration-300 ${pathname === "/about" ? "mt-4 text-[var(--main-color)]" : "mt-1"}`}>
						About
					</span>
				</Link>
				
				<Link href="/work" className="relative flex flex-col items-center w-12">
					<div className={`transition-all duration-300 flex items-center justify-center ${pathname === "/work" ? "w-12 h-12 rounded-full bg-gradient-to-t from-[#de6810] to-[#f28e2c] text-white shadow-[0_0_15px_rgba(226,117,0,0.6)] absolute -top-9 z-10" : "text-[22px] relative"}`}>
						<SiWorkplace className={pathname === "/work" ? "text-[22px]" : ""} />
					</div>
					<span className={`text-[11px] font-medium transition-all duration-300 ${pathname === "/work" ? "mt-4 text-[var(--main-color)]" : "mt-1"}`}>
						Work
					</span>
				</Link>
				
				<Link href="/contact" className="relative flex flex-col items-center w-12">
					<div className={`transition-all duration-300 flex items-center justify-center ${pathname === "/contact" ? "w-12 h-12 rounded-full bg-gradient-to-t from-[#de6810] to-[#f28e2c] text-white shadow-[0_0_15px_rgba(226,117,0,0.6)] absolute -top-9 z-10" : "text-[25px] relative"}`}>
						<TiMessages className={pathname === "/contact" ? "text-[28px]" : ""} />
					</div>
					<span className={`text-[11px] font-medium transition-all duration-300 ${pathname === "/contact" ? "mt-4 text-[var(--main-color)]" : "mt-1"}`}>
						Contact
					</span>
				</Link>
			</motion.div>
		</nav>
	);
}

export default NavBar;

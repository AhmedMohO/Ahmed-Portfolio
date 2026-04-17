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
		<motion.nav
			initial={{ x: 20, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ delay: 0.76, duration: 0.6 }}
			className="fixed right-0 w-23 h-screen md:bg-[#161233] pointer-events-none z-30">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="hidden md:flex fixed flex-col gap-5 lg:gap-7 !right-5 top-1/2 -translate-y-1/2 z-30 text-xs items-center pointer-events-auto">
				<motion.div variants={itemVariants}>
					<Link href="/" className="flex flex-col items-center gap-1.5 group">
						<Magnetic>
							<div
								className={`w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full transition-all duration-300 ${pathname === "/" ? "bg-gradient-to-t from-[#de6810] to-[#f28e2c] shadow-[0_0_15px_rgba(226,117,0,0.6)]" : "border border-white/20 group-hover:border-white/50"}`}>
								<AiOutlineHome className="text-xl lg:text-2xl text-white" />
							</div>
						</Magnetic>
						<span
							className={`text-[11px] lg:text-xs font-semibold transition-colors duration-300 ${pathname === "/" ? "text-[var(--main-color)]" : "text-white group-hover:text-gray-300"}`}>
							Home
						</span>
					</Link>
				</motion.div>

				<motion.div variants={itemVariants}>
					<Link
						href="/about"
						className="flex flex-col items-center gap-1.5 group">
						<Magnetic>
							<div
								className={`w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full transition-all duration-300 ${pathname === "/about" ? "bg-gradient-to-t from-[#de6810] to-[#f28e2c] shadow-[0_0_15px_rgba(226,117,0,0.6)]" : "border border-white/20 group-hover:border-white/50"}`}>
								<TbInfoOctagon className="text-xl lg:text-[26px] text-white" />
							</div>
						</Magnetic>
						<span
							className={`text-[11px] lg:text-xs font-semibold transition-colors duration-300 ${pathname === "/about" ? "text-[var(--main-color)]" : "text-white group-hover:text-gray-300"}`}>
							About
						</span>
					</Link>
				</motion.div>

				<motion.div variants={itemVariants}>
					<Link
						href="/work"
						className="flex flex-col items-center gap-1.5 group">
						<Magnetic>
							<div
								className={`w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full transition-all duration-300 ${pathname === "/work" ? "bg-gradient-to-t from-[#de6810] to-[#f28e2c] shadow-[0_0_15px_rgba(226,117,0,0.6)]" : "border border-white/20 group-hover:border-white/50"}`}>
								<SiWorkplace className="text-lg lg:text-[22px] text-white" />
							</div>
						</Magnetic>
						<span
							className={`text-[11px] lg:text-xs font-semibold transition-colors duration-300 ${pathname === "/work" ? "text-[var(--main-color)]" : "text-white group-hover:text-gray-300"}`}>
							Work
						</span>
					</Link>
				</motion.div>

				<motion.div variants={itemVariants}>
					<Link
						href="/contact"
						className="flex flex-col items-center gap-1.5 group">
						<Magnetic>
							<div
								className={`w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full transition-all duration-300 ${pathname === "/contact" ? "bg-gradient-to-t from-[#de6810] to-[#f28e2c] shadow-[0_0_15px_rgba(226,117,0,0.6)]" : "border border-white/20 group-hover:border-white/50"}`}>
								<TiMessages className="text-[22px] lg:text-[28px] text-white" />
							</div>
						</Magnetic>
						<span
							className={`text-[11px] lg:text-xs font-semibold transition-colors duration-300 ${pathname === "/contact" ? "text-[var(--main-color)]" : "text-white group-hover:text-gray-300"}`}>
							Contact
						</span>
					</Link>
				</motion.div>
			</motion.div>
			<motion.div
				initial={{ y: 30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.76, duration: 0.6 }}
				className="fixed pb-2 pt-3 px-6 mx-4 flex justify-between items-end bottom-5 left-0 right-0 md:hidden bg-[#1c1a29]/95 border border-white/10 backdrop-blur-xl text-gray-400 rounded-[24px] z-50 shadow-2xl pointer-events-auto">
				<Link href="/" className="relative flex flex-col items-center w-12">
					<div
						className={`transition-all duration-300 flex items-center justify-center ${pathname === "/" ? "w-12 h-12 rounded-full bg-gradient-to-t from-[#de6810] to-[#f28e2c] text-white shadow-[0_0_15px_rgba(226,117,0,0.6)] absolute -top-9 z-10" : "text-[22px] relative"}`}>
						<AiOutlineHome className={pathname === "/" ? "text-[26px]" : ""} />
					</div>
					<span
						className={`text-[11px] font-medium transition-all duration-300 ${pathname === "/" ? "mt-4 text-[var(--main-color)]" : "mt-1"}`}>
						Home
					</span>
				</Link>

				<Link
					href="/about"
					className="relative flex flex-col items-center w-12">
					<div
						className={`transition-all duration-300 flex items-center justify-center ${pathname === "/about" ? "w-12 h-12 rounded-full bg-gradient-to-t from-[#de6810] to-[#f28e2c] text-white shadow-[0_0_15px_rgba(226,117,0,0.6)] absolute -top-9 z-10" : "text-[22px] relative"}`}>
						<TbInfoOctagon
							className={pathname === "/about" ? "text-[26px]" : ""}
						/>
					</div>
					<span
						className={`text-[11px] font-medium transition-all duration-300 ${pathname === "/about" ? "mt-4 text-[var(--main-color)]" : "mt-1"}`}>
						About
					</span>
				</Link>

				<Link href="/work" className="relative flex flex-col items-center w-12">
					<div
						className={`transition-all duration-300 flex items-center justify-center ${pathname === "/work" ? "w-12 h-12 rounded-full bg-gradient-to-t from-[#de6810] to-[#f28e2c] text-white shadow-[0_0_15px_rgba(226,117,0,0.6)] absolute -top-9 z-10" : "text-[22px] relative"}`}>
						<SiWorkplace
							className={pathname === "/work" ? "text-[22px]" : ""}
						/>
					</div>
					<span
						className={`text-[11px] font-medium transition-all duration-300 ${pathname === "/work" ? "mt-4 text-[var(--main-color)]" : "mt-1"}`}>
						Work
					</span>
				</Link>

				<Link
					href="/contact"
					className="relative flex flex-col items-center w-12">
					<div
						className={`transition-all duration-300 flex items-center justify-center ${pathname === "/contact" ? "w-12 h-12 rounded-full bg-gradient-to-t from-[#de6810] to-[#f28e2c] text-white shadow-[0_0_15px_rgba(226,117,0,0.6)] absolute -top-9 z-10" : "text-[25px] relative"}`}>
						<TiMessages
							className={pathname === "/contact" ? "text-[28px]" : ""}
						/>
					</div>
					<span
						className={`text-[11px] font-medium transition-all duration-300 ${pathname === "/contact" ? "mt-4 text-[var(--main-color)]" : "mt-1"}`}>
						Contact
					</span>
				</Link>
			</motion.div>
		</motion.nav>
	);
}

export default NavBar;

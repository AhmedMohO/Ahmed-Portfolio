import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Magnetic from "./Magnatic";
import { motion } from "framer-motion";

function Header() {
	return (
		<header className="absolute top-0 left-0 right-0 z-10 flex gap-3 max-sm:flex-wrap justify-center sm:justify-between items-center wrapper text-4xl py-2">
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.76, duration: 0.6 }}>
				<Link href="/">
					<strong className="text-[var(--main-color)] drop-shadow-[0_0_25px_var(--main-color)]">
						Ahmed
					</strong>{" "}
					Moh
					<strong className="text-[var(--main-color)]">.</strong>
				</Link>
			</motion.div>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.76, duration: 0.6 }}
				className="flex bg-red-200/10 p-3 rounded-xl items-center gap-4 text-gray-200">
				<Magnetic>
					<a
						target="_blank"
						className="transition-colors hover:text-[var(--main-color)] duration-200"
						href="https://www.facebook.com/ahmed.moh232/">
						<FaFacebook size={24} />
					</a>
				</Magnetic>
				<Magnetic>
					<a
						target="_blank"
						className="transition-colors hover:text-[var(--main-color)] duration-200"
						href="https://wa.me/201020697551?text=Hey%2C%20I%20love%20your%20website!">
						<FaSquareWhatsapp size={24} />
					</a>
				</Magnetic>
				<Magnetic>
					<a
						target="_blank"
						className="transition-colors hover:text-[var(--main-color)] duration-200"
						href="https://www.linkedin.com/in/ahmed-mohammed-950574277">
						<FaLinkedin size={24} />
					</a>
				</Magnetic>
				<Magnetic>
					<a
						target="_blank"
						className="transition-colors hover:text-[var(--main-color)] duration-200"
						href="https://github.com/AhmedMohO">
						<FaGithub size={24} />
					</a>
				</Magnetic>
			</motion.div>
		</header>
	);
}

export default Header;

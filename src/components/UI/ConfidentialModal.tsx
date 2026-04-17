import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Button from "./Button";
import Link from "next/link";
import { useEffect } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function ConfidentialModal({ isOpen, onClose }: ModalProps) {
	// Prevent body scroll when open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		}
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
					onClick={onClose}>
					<motion.div
						initial={{ scale: 0.9, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.9, opacity: 0, y: 20 }}
						transition={{ type: "spring", damping: 25, stiffness: 300 }}
						className="relative w-full max-w-lg bg-[#18131e]/95 border border-white/10 rounded-[20px] p-8 shadow-2xl flex flex-col gap-6"
						onClick={(e) => e.stopPropagation()}>
						
						<button
							onClick={onClose}
							className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors">
							<AiOutlineClose className="text-2xl" />
						</button>

						<h2 className="text-2xl font-bold text-white tracking-tight pr-8">Confidential Project</h2>
						
						<p className="text-gray-300 leading-relaxed text-[15px]">
							This project was completed as part of a freelance/contract engagement. Due to confidentiality agreements, the source code is not publicly available. For more details about the project, feel free to contact me.
						</p>

						<div className="w-full flex justify-end mt-2 group">
							<Button
								li
								link="/contact"
								classNamePropsTwo="!w-fit !h-fit !rounded-xl !overflow-visible p-[2px] bg-gradient-to-r from-[var(--main-color)] to-[#e47600] shadow-[0_0_15px_rgba(226,117,0,0.4)] group-hover:shadow-[0_0_25px_rgba(226,117,0,0.6)] transition-all duration-300"
								classNameProps="bg-gradient-to-r from-[#de6810] to-[#e47600] !px-6 !py-3 !rounded-[10px] text-[15px] sm:text-[16px] font-bold gap-3 text-white justify-center items-center shadow-inner">
								<span onClick={onClose} className="flex items-center gap-2">
									Contact Me{" "}
									<BsArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
								</span>
							</Button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

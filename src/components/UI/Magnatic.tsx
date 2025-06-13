import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
	children: React.ReactNode;
	className?: string;
}

export default function Magnetic({ children, className }: MagneticProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;
		const { clientX, clientY } = e;
		const { height, width, left, top } = ref.current.getBoundingClientRect();
		const middleX = (clientX - (left + width / 2)) * 0.25;
		const middleY = (clientY - (top + height / 2)) * 0.25;
		setPosition({ x: middleX, y: middleY });
	};

	const reset = () => {
		setPosition({ x: 0, y: 0 });
	};

	const { x, y } = position;
	return (
		<motion.div
			style={{ position: "relative" }}
			ref={ref}
			onMouseMove={(e) => handleMouse(e)}
			onMouseLeave={reset}
			className={className}
			animate={{ x, y }}
			transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}>
			<motion.div
				style={{ position: "relative" }}
				ref={ref}
				onMouseMove={(e) => handleMouse(e)}
				onMouseLeave={reset}
				className=""
				animate={{ x, y }}
				transition={{
					type: "spring",
					stiffness: 150,
					damping: 15,
					mass: 0.1,
				}}>
				{" "}
				{children}
			</motion.div>
		</motion.div>
	);
}

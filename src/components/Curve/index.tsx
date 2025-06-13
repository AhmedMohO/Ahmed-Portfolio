import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate } from "./anim";
import { GoDotFill } from "react-icons/go";

interface Routes {
	[key: string]: string;
}

const routes: Routes = {
	"/": "Home",
	"/about": "About",
	"/work": "Work",
	"/contact": "Contact",
};

const anim = (variants: Variants) => {
	return {
		variants,
		initial: "initial",
		animate: "enter",
		exit: "exit",
	};
};

interface CurveProps {
	children: React.ReactNode;
}

interface Dimensions {
	width: number | null;
	height: number | null;
}

export default function Curve({ children }: CurveProps) {
	const router = useRouter();
	const [dimensions, setDimensions] = useState<Dimensions>({
		width: null,
		height: null,
	});

	useEffect(() => {
		function resize() {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		resize();
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<section className="relative wrapper">
			<div
				className={`fixed inset-0 z-20 pointer-events-none transition-opacity duration-0 delay-100 ${
					dimensions.width == null ? "opacity-100" : "opacity-0"
				}`}
				style={{ backgroundColor: "black" }}
			/>
			<motion.p
				className="fixed left-1/2 top-[50%] text-white flex items-center text-[46px] z-30 -translate-x-1/2 text-center pointer-events-none"
				{...anim(text)}>
				<GoDotFill size={30} />
				{routes[router.route]}
			</motion.p>
			{dimensions.width != null && dimensions.height != null && (
				<SVG height={dimensions.height} width={dimensions.width} />
			)}
			{children}
		</section>
	);
}

interface SVGProps {
	height: number;
	width: number;
}

const SVG = ({ height, width }: SVGProps) => {
	const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

	const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

	return (
		<motion.svg
			className="fixed h-[calc(100vh+600px)] z-20 w-screen pointer-events-none left-0 top-0"
			{...anim(translate)}>
			<motion.path {...anim(curve(initialPath, targetPath))} />
		</motion.svg>
	);
};

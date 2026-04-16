import { ReactNode, useEffect, useRef } from "react";

interface TapProps {
	children: ReactNode;
	isActive: boolean;
	onClick: () => void;
	setPosition: (position: { width: number; left: number; top: number; height: number }) => void;
	setCurrentPosition: (position: { width: number; left: number; top: number; height: number }) => void;
}

export default function Tap({
	children,
	isActive,
	onClick,
	setPosition,
	setCurrentPosition,
}: TapProps) {
	const ref = useRef<HTMLButtonElement>(null);

	function handlePositionChange(position: { width: number; left: number; top: number; height: number }) {
		setPosition(position);
	}

	useEffect(() => {
		if (!ref.current) return;

		if (isActive) {
			const { width, height } = ref.current.getBoundingClientRect();
			const left = ref.current.offsetLeft;
			const top = ref.current.offsetTop;

			setCurrentPosition({ width, left, top, height });
		}
	}, [isActive, setCurrentPosition]);

	return (
		<li className="flex-1 sm:flex-none z-10">
			<button
				className={`relative z-20 w-full text-sm sm:text-[15px] px-3 py-2.5 sm:px-5 sm:py-3 flex items-center justify-center gap-1 cursor-pointer capitalize transition-colors duration-200 ${
					isActive ? "font-semibold text-white" : "text-gray-400 hover:text-gray-200"
				}`}
				onClick={onClick}
				ref={ref}
				onMouseEnter={() => {
					if (!ref.current) return;

					const { width, height } = ref.current.getBoundingClientRect();
					handlePositionChange({ width, left: ref.current.offsetLeft, top: ref.current.offsetTop, height });
				}}>
				{children}
			</button>
		</li>
	);
}

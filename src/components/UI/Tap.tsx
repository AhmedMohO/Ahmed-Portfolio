import { ReactNode, useEffect, useRef } from "react";

interface TapProps {
	children: ReactNode;
	isActive: boolean;
	onClick: () => void;
	setPosition: (position: { width: number; left: number }) => void;
	setCurrentPosition: (position: { width: number; left: number }) => void;
}

export default function Tap({
	children,
	isActive,
	onClick,
	setPosition,
	setCurrentPosition,
}: TapProps) {
	const ref = useRef<HTMLButtonElement>(null);

	function handlePositionChange(position: { width: number; left: number }) {
		setPosition(position);
	}

	useEffect(() => {
		if (!ref.current) return;

		if (isActive) {
			const { width } = ref.current.getBoundingClientRect();
			const left = ref.current.offsetLeft;

			setCurrentPosition({ width, left });
		}
	}, [isActive, setCurrentPosition]);

	return (
		<li>
			<button
				className={`relative z-10 max-sm:text-sm px-1 sm:px-3 py-2 flex items-center gap-1 cursor-pointer capitalize ${
					isActive ? "font-bold" : ""
				}`}
				onClick={onClick}
				ref={ref}
				onMouseEnter={() => {
					if (!ref.current) return;

					const { width } = ref.current.getBoundingClientRect();
					handlePositionChange({ width, left: ref.current.offsetLeft });
				}}>
				{children}
			</button>
		</li>
	);
}

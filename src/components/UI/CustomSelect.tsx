import { useState, useRef, useEffect } from "react";
import { BsChevronDown, BsCheck } from "react-icons/bs";

interface CustomSelectProps {
	options: string[];
	selectedOptions: string[];
	onChange: (selected: string[]) => void;
	placeholder: string;
}

export default function CustomSelect({
	options,
	selectedOptions,
	onChange,
	placeholder,
}: CustomSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const toggleOption = (option: string) => {
		if (selectedOptions.includes(option)) {
			onChange(selectedOptions.filter((item) => item !== option));
		} else {
			onChange([...selectedOptions, option]);
		}
	};

	return (
		<div className="relative z-40 select-none" ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-3 bg-[#18131e]/80 border border-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-semibold text-gray-200 transition-colors hover:bg-[#25223c]">
				{placeholder}
				<BsChevronDown
					className={`text-gray-400 transition-transform duration-200 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>

			{isOpen && (
				<div className="absolute left-0 top-full mt-2 w-52 bg-[#25223c]/95 backdrop-blur-xl border border-white/10 rounded-xl max-h-60 overflow-y-auto custom-scrollbar p-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col gap-1">
					{options.map((option) => (
						<label
							key={option}
							onClick={(e) => {
								e.preventDefault();
								toggleOption(option);
							}}
							className="flex items-center gap-3 px-2 py-2 cursor-pointer group rounded-lg hover:bg-white/5 transition-colors">
							<div
								className={`w-[18px] h-[18px] rounded-[4px] border flex items-center justify-center transition-all ${
									selectedOptions.includes(option)
										? "bg-[var(--main-color)] border-[var(--main-color)]"
										: "border-gray-500 group-hover:border-gray-400"
								}`}>
								{selectedOptions.includes(option) && (
									<BsCheck className="text-white text-lg font-bold" />
								)}
							</div>
							<span className="text-gray-200 text-sm">{option}</span>
						</label>
					))}
				</div>
			)}
		</div>
	);
}

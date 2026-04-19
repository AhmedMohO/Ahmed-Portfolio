import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight, BsFilter } from "react-icons/bs";
import Curve from "../../components/Curve";
import dynamic from "next/dynamic";
import { useState, useMemo, useEffect } from "react";
import CustomSelect from "@/components/UI/CustomSelect";
import ConfidentialModal from "@/components/UI/ConfidentialModal";

const ParticalesContainer = dynamic(
	() => import("@/components/ParticalesContainer"),
	{
		ssr: false,
	},
);

import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import { cn } from "../../../utils/utils";

interface Project {
	date: string;
	title: string;
	path: string;
	month: string;
	year: number;
	tags: string[];
	isFeatured: boolean;
	image: {
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
}

interface WorkProps {
	projects: Project[];
}

const ITEMS_PER_PAGE = 6;

function Work({ projects }: WorkProps) {
	const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
	const [selectedYears, setSelectedYears] = useState<string[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const MONTHS_MAP: Record<string, number> = {
		January: 0,
		February: 1,
		March: 2,
		April: 3,
		May: 4,
		June: 5,
		July: 6,
		August: 7,
		September: 8,
		October: 9,
		November: 10,
		December: 11,
	};

	// Ensure we have a valid array and sort by explicitly year/month descending
	const allProjects = useMemo(() => {
		const raw = projects || [];
		return [...raw].sort((a, b) => {
			if (a.year !== b.year) {
				return (b.year || 0) - (a.year || 0);
			}
			const aMonth = MONTHS_MAP[a.month] ?? -1;
			const bMonth = MONTHS_MAP[b.month] ?? -1;
			return bMonth - aMonth;
		});
	}, [projects]);

	// Extract unique technologies and years for dropdowns
	const availableTechs = useMemo(() => {
		const tags = allProjects.flatMap((p) => p.tags || []);
		return Array.from(new Set(tags)).sort();
	}, [allProjects]);

	const availableYears = useMemo(() => {
		const years = allProjects.map((p) => p.year).filter(Boolean);
		return Array.from(new Set(years))
			.sort((a, b) => b - a)
			.map(String);
	}, [allProjects]);

	// Filter projects
	const filteredProjects = useMemo(() => {
		return allProjects.filter((project) => {
			const matchTech =
				selectedTechs.length === 0 ||
				selectedTechs.every((t) => project.tags?.includes(t));
			const matchYear =
				selectedYears.length === 0 ||
				(project.year && selectedYears.includes(String(project.year)));
			return matchTech && matchYear;
		});
	}, [allProjects, selectedTechs, selectedYears]);

	// Reset pagination on filter change
	useEffect(() => {
		setCurrentPage(1);
	}, [selectedTechs, selectedYears, filteredProjects.length]);

	// Split into featured and normal
	const featuredProjects = filteredProjects.filter((p) => p.isFeatured);
	const normalProjects = filteredProjects.filter((p) => !p.isFeatured);

	// Paginate normal projects
	const totalPages = Math.ceil(normalProjects.length / ITEMS_PER_PAGE);
	const paginatedNormalProjects = normalProjects.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE,
	);

	const handleProjectClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		path: string,
	) => {
		if (path === "#") {
			e.preventDefault();
			setIsModalOpen(true);
		}
	};

	const ProjectCard = ({
		project,
		featuredClass = "",
	}: {
		project: Project;
		featuredClass?: string;
	}) => {
		const imageUrl = urlFor(project.image);
		return (
			<motion.div
				layout
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9 }}
				transition={{ duration: 0.4 }}
				className={cn(
					"w-full h-full bg-[#18131e]/80 border border-transparent rounded-xl p-3 flex flex-col gap-4 shadow-lg hover:shadow-[0_0_20px_rgba(226,117,0,0.2)] hover:border-[var(--main-color)] transition-all duration-500 overflow-hidden group/card",
					featuredClass,
				)}>
				<a
					href={project.path}
					target={project.path !== "#" ? "_blank" : "_self"}
					onClick={(e) => handleProjectClick(e, project.path)}
					className="relative w-full flex-1 min-h-[200px] rounded-md overflow-hidden group cursor-pointer border border-white/5 z-20">
					<Image
						src={`${imageUrl.url()}`}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						alt={project.title}
						className="object-cover rounded-md group-hover:scale-105 transition-transform duration-700 z-20"
					/>

					{/* Hover Overlay mimicking the image design */}
					<div className="absolute inset-0 z-30 bg-[#0a0510]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-5">
						{project.tags && project.tags.length > 0 && (
							<div className="flex gap-2 flex-wrap justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
								{project.tags.slice(0, 3).map((tag) => (
									<span
										key={tag}
										className="px-4 py-1.5 rounded-full border border-white/20 text-white text-[13px] tracking-wide bg-white/5 backdrop-blur-md">
										{tag}
									</span>
								))}
							</div>
						)}
						<div className="bg-gradient-to-r from-[#de6810] to-[#f28e2c] text-white px-7 py-2.5 rounded-full font-bold shadow-[0_0_20px_rgba(226,117,0,0.7)] flex items-center gap-2 group-hover:scale-105 transition-all duration-300 md:text-lg translate-y-4 group-hover:translate-y-0 delay-150">
							{project.path === "#" ? "Private Project" : "Live Demo"}
							{project.path === "#" ? null : (
								<BsArrowRight className="text-xl" />
							)}
						</div>
					</div>
				</a>
				<div className="flex flex-col gap-1.5 px-2 pb-1">
					<h3 className="text-xl font-bold text-white tracking-wide">
						{project.title}
					</h3>
					<p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
						{project.tags?.join(", ") || "A web development project."}
					</p>
				</div>
			</motion.div>
		);
	};

	return (
		<>
			<Head>
				<title>My Work</title>
			</Head>
			<Curve>
				<main className="min-h-screen flex flex-col items-center relative z-10 transition-all">
					<div className="fixed inset-0 -z-10">
						<ParticalesContainer />
					</div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.9, duration: 0.8 }}
						className="w-full flex flex-col gap-14 pb-32">
						{/* Filter Bar */}
						<div className="relative z-50 w-full bg-[#1c1a29]/60 border border-white/10 rounded-2xl p-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl backdrop-blur-md">
							<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
								<div className="flex items-center gap-2 text-[var(--main-color)] font-bold text-[15px] tracking-wider">
									<BsFilter className="text-xl" />
									REFINE RESULTS:
								</div>
								<div className="flex flex-wrap gap-4 w-full sm:w-auto pb-1 sm:pb-0 z-40">
									<CustomSelect
										options={availableTechs}
										selectedOptions={selectedTechs}
										onChange={setSelectedTechs}
										placeholder="Technologies"
										showSearch
									/>
									<CustomSelect
										options={availableYears}
										selectedOptions={selectedYears}
										onChange={setSelectedYears}
										placeholder="Year"
									/>
								</div>
							</div>
							<div className="text-gray-400 text-sm font-medium tracking-wide">
								{filteredProjects.length} Projects Displayed
							</div>
						</div>

						{/* Ensure content exists after filtering */}
						{filteredProjects.length === 0 ? (
							<div className="w-full text-center py-20 text-gray-500 font-medium text-lg">
								No projects matching your current filters.
							</div>
						) : (
							<div className="w-full flex flex-col gap-14">
								{/* Featured Projects Section */}
								{featuredProjects.length > 0 && (
									<div className="w-full flex flex-col gap-6">
										<h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
											Featured Projects
										</h2>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-3 md:gap-6 auto-rows-fr sm:min-h-[350px] md:min-h-[500px]">
											{featuredProjects
												.slice(0, 4)
												.map((project, index, arr) => {
													const total = arr.length;
													let bentoClass = "col-span-1 row-span-1"; // Default small block mapping

													if (total === 3) {
														// 3 Items: Mobile (Stacked) | Tablet (1 wide top, 2 small bottom) | Desktop (1 huge left, 2 small right)
														if (index === 0)
															bentoClass =
																"col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-2";
													} else if (total >= 4) {
														// 4 Items: Mobile (Stacked) | Tablet (alternating) | Desktop (1 huge left, 2 small right, 1 wide bottom)
														if (index === 0)
															bentoClass =
																"col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-2";
														if (index === 3)
															bentoClass =
																"col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-3 md:row-span-1";
													}

													return (
														<ProjectCard
															key={`${project.title}-${index}`}
															project={project}
															featuredClass={`${bentoClass} shadow-[0_0_20px_rgba(226,117,0,0.15)]`}
														/>
													);
												})}
										</div>
									</div>
								)}

								{/* All Projects Section */}
								{normalProjects.length > 0 && (
									<div className="w-full flex flex-col gap-6">
										<h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
											All Projects
										</h2>

										<AnimatePresence mode="wait">
											<motion.div
												key={`page-${currentPage}`}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -10 }}
												transition={{ duration: 0.3 }}
												className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
											>
												{paginatedNormalProjects.map((project, index) => (
													<ProjectCard
														key={`${project.title}-${index}-${currentPage}`}
														project={project}
													/>
												))}
											</motion.div>
										</AnimatePresence>

										{/* Pagination */}
										{totalPages > 1 && (
											<div className="flex justify-center items-center gap-2 mt-6 pb-12">
												{Array.from({ length: totalPages }).map((_, i) => (
													<button
														key={i}
														onClick={() => setCurrentPage(i + 1)}
														className={cn(
															"h-2.5 rounded-full transition-all duration-300",
															currentPage === i + 1
																? "w-8 bg-[var(--main-color)] shadow-[0_0_10px_rgba(226,117,0,0.8)]"
																: "w-2.5 bg-white/20 hover:bg-white/40 shadow-sm",
														)}
														aria-label={`Go to page ${i + 1}`}
													/>
												))}
											</div>
										)}
									</div>
								)}
							</div>
						)}
					</motion.div>
				</main>
			</Curve>

			<ConfidentialModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	);
}

export async function getStaticProps() {
	// Fetching directly from the new Project schema!
	const query = `*[_type == "project"] | order(_createdAt desc){
		date,
		title,
		path,
		month,
		year,
		tags,
		isFeatured,
		image{
			_type,
			asset{
				_ref,
				_type
			}
		}
	}`;

	const projects = await client.fetch(query);

	return {
		props: {
			projects: projects || [],
		},
		revalidate: 60, // reduced revalidation time globally
	};
}

export default Work;

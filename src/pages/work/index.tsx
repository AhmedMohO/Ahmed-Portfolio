import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import Curve from "../../components/Curve";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import ParticalesContainer from "@/components/ParticalesContainer";

interface Slide {
	images: {
		date: string;
		title: string;
		path: string;
		image: {
			_type: string;
			asset: {
				_ref: string;
				_type: string;
			};
		};
	}[];
}

interface WorkProps {
	slides: Slide[];
}

function Work({ slides }: WorkProps) {
	return (
		<>
			<Head>
				<title>My Work</title>
				<meta name="description" content="My Work" />
			</Head>
			<Curve>
				<main className="h-[calc(100vh-120px)] flex max-lg:flex-col items-center gap-4">
					<ParticalesContainer />
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.76, duration: 0.6 }}
						className="flex flex-col gap-6 lg:max-w-2/5">
						<h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight md:leading-[1.3] max-lg:text-center">
							Crafting Code with
							<span className="text-[var(--main-color)]">
								{" "}
								Purpose
							</span> and{" "}
							<span className="text-[var(--main-color)]"> Passion</span>
						</h1>{" "}
						<p className="max-lg:text-center text-gray-300">
							I&apos;m a front-end developer with 3 years of experience who
							loves turning ideas into sleek, I bring strategy and creativity to
							every project. I&apos;m all about crafting digital experiences
							that stand out and deliver real value.
						</p>
					</motion.div>
					<motion.div
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.76, duration: 0.6 }}
						className="relative w-full lg:max-w-3/5 bg-red-200/10 rounded-2xl p-3">
						<Swiper
							className="w-full max-h-[500px] overflow-hidden"
							spaceBetween={10}
							freeMode
							autoplay={{ pauseOnMouseEnter: true, delay: 2500 }}
							speed={500}
							observer={true}
							observeParents={true}
							updateOnWindowResize={true}
							pagination={{
								clickable: true,
								el: ".pagination",
							}}
							modules={[Pagination, Autoplay]}>
							{slides?.map((slide, index) => (
								<SwiperSlide key={index} className="m-auto">
									<motion.div
										className="grid max-[456px]:grid-cols-[repeat(auto-fit,minmax(123px,1fr))] grid-cols-[repeat(auto-fit,minmax(185px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] min-[1024px]:max-[1111px]:!grid-cols-[repeat(auto-fit,minmax(216px,1fr))] gap-4 cursor-pointer"
										variants={{
											hidden: { opacity: 0 },
											show: {
												opacity: 1,
												transition: {
													staggerChildren: 0.3,
													delayChildren: 0.78,
												},
											},
										}}
										initial="hidden"
										animate="show">
										{slide.images?.map((image, index) => {
											const imageUrl = urlFor(image.image);
											return (
												<motion.div
													key={index}
													variants={{
														hidden: { scale: 0, opacity: 0 },
														show: { scale: 1, opacity: 1 },
													}}
													transition={{ duration: 0.6 }}
													className="relative rounded-lg overflow-hidden flex items-center justify-center group">
													<a
														href={`${image.path}`}
														target="_blank"
														className="flex items-center justify-center rounded-xl relative overflow-hidden group">
														<Image
															src={`${imageUrl.url()}`}
															width={640}
															height={360}
															alt="My projects"
															className="w-full object-cover"
														/>
														<div className="absolute inset-0 bg-gradient-to-l from-[#e838cb34] via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
														<div className="absolute bottom-0 translate-y-full group-hover:bottom-1/3 group-hover:-translate-y-1/2 transition-all duration-300">
															<div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
																<div className="delay-100">{image.title}</div>
																<div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
																	Project
																</div>
																<div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
																	<BsArrowRight />
																</div>
															</div>
														</div>
													</a>
												</motion.div>
											);
										})}
									</motion.div>
								</SwiperSlide>
							))}
						</Swiper>
						<div className="absolute !-bottom-4 mx-auto w-full pagination flex justify-center gap-2"></div>
					</motion.div>
				</main>
			</Curve>
		</>
	);
}

export async function getStaticProps() {
	const query = `*[_type == "slide"] | order(_createdAt asc){
		images[]{
			date,
			title,
			path,
			image{
				_type,
				asset{
					_ref,
					_type
				}
			}
		}
	}`;

	const slides = await client.fetch(query);

	return {
		props: {
			slides,
		},
	};
}

export default Work;

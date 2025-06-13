import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticalesContainer() {
	//@ts-expect-error raa
	const particaleInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particalesLoaded = useCallback(async () => {}, []);

	return (
		<Particles
			className="w-full h-full absolute -z-10 translate-z-0"
			id="tsparticles"
			init={particaleInit}
			loaded={particalesLoaded}
			options={{
				fullScreen: { enable: false },
				background: {
					color: {
						value: "",
					},
				},
				fps_limit: 120,
				interactivity: {
					events: {
						resize: true,
					},
				},
				particles: {
					color: {
						value: "#c64b22",
					},
					links: {
						color: "#c29223",
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: "bounce",
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 40,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
				detectRetina: true,
			}}
		/>
		// <Particles
		// 	className="w-full h-full absolute translate-z-0"
		// 	id="tsparticles"
		// 	init={particaleInit}
		// 	loaded={particalesLoaded}
		// 	options={{
		// 		fullScreen: { enable: false },
		// 		background: {
		// 			color: {
		// 				value: "",
		// 			},
		// 		},
		// 		fps_limit: 120,
		// 		interactivity: {
		// 			events: {
		// 				onClick: {
		// 					enable: false,
		// 					mode: "push",
		// 				},
		// 				onHover: {
		// 					enable: true,
		// 					mode: "repulse",
		// 				},
		// 				resize: true,
		// 			},
		// 			modes: {
		// 				push: {
		// 					quantity: 90,
		// 				},
		// 				repulse: {
		// 					distance: 200,
		// 					duration: 0.4,
		// 				},
		// 			},
		// 		},
		// 		particles: {
		// 			color: {
		// 				value: "hsl(15.08deg 70.77% 45.41%)",
		// 			},
		// 			links: {
		// 				color: "hsl(41.95deg 69.7% 44.9%)",
		// 				distance: 150,
		// 				enable: true,
		// 				opacity: 0.5,
		// 				width: 1,
		// 			},
		// 			collisions: {
		// 				enable: true,
		// 			},
		// 			move: {
		// 				direction: "none",
		// 				enable: true,
		// 				outModes: "bounce",
		// 				random: false,
		// 				speed: 1,
		// 				straight: false,
		// 			},
		// 			number: {
		// 				density: {
		// 					enable: true,
		// 					area: 800,
		// 				},
		// 				value: 80,
		// 			},
		// 			opacity: {
		// 				value: 0.5,
		// 			},
		// 			shape: {
		// 				type: "circle",
		// 			},
		// 			size: {
		// 				value: { min: 1, max: 5 },
		// 			},
		// 		},
		// 		detectRetina: true,
		// 	}}
		// />
	);
}

export default ParticalesContainer;

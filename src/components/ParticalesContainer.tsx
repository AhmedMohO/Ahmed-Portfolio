import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticalesContainer = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => setInit(true));
	}, []);

	if (!init) return null;

	return (
		<Particles
			className="w-full h-full absolute -z-10 translate-z-0"
			id="tsparticles"
			options={{
				fullScreen: { enable: false },
				background: {
					color: {
						value: "",
					},
				},
				fpsLimit: 60,
				interactivity: {
					events: {
						resize: { enable: true },
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
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 0.8,
						straight: false,
					},
					number: {
						density: {
							enable: true,
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
	);
};

export default ParticalesContainer;

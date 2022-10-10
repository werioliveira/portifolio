import React from "react";
import { motion } from "framer-motion";
function Projects() {
	const projects = [1, 2, 3, 4, 5];
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
				Projects
			</h3>
			<div className="realative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5C2E7E] scrollbar-thin">
				{projects.map((project, i) => (
					<div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen 1xl:pt-28">
						<motion.img
							initial={{
								y: -300,
								opacity: 0,
							}}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							className="1xl:h-3/4"
							src="https://about.netflix.com/images/meta/netflix-symbol-black.png"
							alt=""
						/>
						<div>
							<h4 className="m-3 text-4xl font-semibold text-center">
								Case Study {i + 1} of {projects.length}
							</h4>
							<p className="text-lg text-center md:text-left">
								simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived
								not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged. It was popularised
								in the 1960s with the release of 1500s
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[38%] bg-[#f7AB0A]/30 left-0 h-[500px] -skew-y-12"></div>
		</motion.div>
	);
}

export default Projects;

import React from "react";
import { motion } from "framer-motion";

function About() {
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
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[25px] text-2xl">
				About
			</h3>

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				viewport={{ once: false }}
				className="-mb-20 mt-40 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover
				 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[400px] sm:w-56 sm:h-56"
				src="https://media-exp1.licdn.com/dms/image/C4D03AQG-AfSAKUTO7w/profile-displayphoto-shrink_800_800/0/1631709334668?e=1669852800&v=beta&t=sVTkfjxJ4ZF_cgAt2bYPEMTLLMWhCBO6rtBcVlOCFSA"
			/>
			<div className="space-y-2 px-0 md:px-10">
				<h4 className="text-2xl font-semibold pt-5 sm:text-3xl sm:pt-0">
					Here is a little background
				</h4>
				<p className="text-base">
					is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it
					to make a type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of 1500s,
					when an unknown printer took a galley of type and scrambled it to make
					a type specimen book. It has survived not only five centuries, but
					also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of 1500s,
					when an unknown printer took a galley of type and scrambled it to make
					a type specimen book. It has survived not only five centuries, but
					also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of
				</p>
			</div>
		</motion.div>
	);
}

export default About;

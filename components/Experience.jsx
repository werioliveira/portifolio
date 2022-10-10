import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function Experience() {
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
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-28 uppercase tracking-[15px] text-2xl 1xl:top-10 xl:top-10">
				Experience
			</h3>
			<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory xl:mt-8 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5C2E7E] scrollbar-thin mt-10">
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
			</div>
		</motion.div>
	);
}

export default Experience;

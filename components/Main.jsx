import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

function Main() {
	const [text, count] = useTypewriter({
		words: ["Hi, i'm Weri Oliveira", "The guy what want grow up"],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />

			<img
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src="https://media-exp1.licdn.com/dms/image/C4D03AQG-AfSAKUTO7w/profile-displayphoto-shrink_800_800/0/1631709334668?e=1669852800&v=beta&t=sVTkfjxJ4ZF_cgAt2bYPEMTLLMWhCBO6rtBcVlOCFSA"
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[25px]">
					Web Developer
				</h2>

				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#5C2E7E" />
				</h1>
				<div className="pt-5">
					<Link href="#about">
						<button className="btn"> About</button>
					</Link>
					<Link href="#experience">
						<button className="btn"> Experience</button>
					</Link>
					<Link href="#skills">
						<button className="btn"> Skills</button>
					</Link>
					<Link href="#projects">
						<button className="btn"> projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Main;

import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/solid";



export default function Home() {
  return (
    <div className="bg-[rgb(32,32,32)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5C2E7E] scrollbar-thin">
      <Header/>
        <section id="main" className="snap-start">
          <Main/>
        </section>
        <section id="about" className="snap-center">
          <About/>
        </section>
        <section id="experience" className="snap-center">
          <Experience/>
        </section>
        <section id="projects" className="snap-start">
          <Projects/>
        </section>
        <section id="contact" className="snap-start">
          <Contact/>
        </section>
        <Link href="#main">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
            <ArrowUpIcon className="h-10 w-10 animate-pulse filter grayscale hover:grayscale-0 cursor-pointer bg-[#F7AB0A] rounded-full p-2" />
             
            </div>
          </footer>
        </Link>
    </div>
  )
}

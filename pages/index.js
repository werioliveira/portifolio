import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Main from "../components/Main";


export default function Home() {
  return (
    <div className="bg-[rgb(32,32,32)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
    </div>
  )
}

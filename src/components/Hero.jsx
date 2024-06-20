import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className={`${styles.heroHeadText} text-white`}>
          <h1>Bonjour, Je suis
            <span className="text-[#915eff]"> AMBEU</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Je développe des sites statiques, <br className="sm:block hidden" /> 
            des applications web & mobiles(full-stack),
            des interfaces 3D & utlisateurs. 
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero
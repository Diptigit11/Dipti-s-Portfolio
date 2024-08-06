import { motion } from "framer-motion";
import { styles } from "../styles";
import profile from './../assets/profile.png';
import resume_Dipti from './../assets/resume_Dipti.pdf';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Dipti</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Enjoy building websites that are cool, <br className="sm:block hidden" />
            bringing ideas to life online!
          </p>
          <a
            href={resume_Dipti}
            download="resume_Dipti.pdf"
            className="inline-block mt-4 bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 text-center"
          >
             Resume
          </a>
        </div>

        {/* Profile Image */}
        <div className="flex-grow flex justify-end items-center mt-20">
          <div className="hidden lg:block border-4 border-white p-2 rounded-full">
            <img
              src={profile}
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

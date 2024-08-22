import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import codingImg from "../../assets/coding-1.jpg";
import { faDatabase, faMinus, faSheqel, faTelevision } from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion"
import {
  faCss3,
  faHtml5,
  faJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <main className="relative bg-[#292F36] min-h-screen flex justify-center items-center">
       {/* bg-img */}
       <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${codingImg})` }}
        />
      <section className="relative w-full max-w-7xl mx-auto px-4 py-8">
      
        {/* container */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center">
          <motion.h1 
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{once:false}}
           transition={{
             type: "spring",
             stiffness: 60,
             damping: 10,
             delay: 0.2,
           }}
          className="text-5xl font-semibold text-[#12F7D6] mt-4">Skills</motion.h1>
          <motion.h1 
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{once:false}}
           transition={{
             type: "spring",
             stiffness: 60,
             damping: 10,
             delay: 0.2,
           }}>
          <FontAwesomeIcon
            icon={faMinus}
            className="text-[#12F7D6] mt-2"
            style={{ fontSize: "3rem", width: "3rem", height: "3rem" }} // Adjusted size
          /></motion.h1>
          <motion.p 
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{once:false}}
           transition={{
             type: "spring",
             stiffness: 60,
             damping: 10,
             delay: 0.4,
           }}
           className="text-white text-sm md:text-lg mt-2">
            I am striving to never stop learning and improving
          </motion.p>

          <div className="mt-16 w-auto">
            <motion.div
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{once:false}}
             transition={{
               type: "spring",
               stiffness: 60,
               damping: 10,
               delay: 0.4,
             }}
              className="flex flex-col justify-center items-center rounded-xl bg-[#98FAEC] border-l-8 border-[#0C73B8] p-6">
              <FontAwesomeIcon
                icon={faTelevision}
                className="text-black p-1"
              />
              <h2 className="text-lg font-semibold p-2">Web Development</h2>
              <div>
                <span>HTML - </span>
                <span>CSS - </span>
                <span>JS - </span>
                <span>REACT - </span>
                <span>MYSQL -</span>
                <span>PHP</span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-12 w-full max-w-4xl mx-auto">
            {/* HTML */}
            <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{once:false}}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.6,
            }}
            className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 flex justify-center items-center bg-[#E54F26] rounded-full">
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="text-white text-4xl font-bold"
                />
              </div>
              <h1 className="text-xl text-[#E54F26] font-semibold mt-5">
                HTML
              </h1>
            </motion.div>

            {/* CSS */}
            <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{once:false}}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.7,
            }}
            className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 flex justify-center items-center bg-[#0C73B8] rounded-full">
                <FontAwesomeIcon
                  icon={faCss3}
                  className="text-white text-4xl font-bold"
                />
              </div>
              <h1 className="text-xl text-[#0C73B8] font-semibold mt-5">CSS</h1>
            </motion.div>

            {/* JavaScript */}
            <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{once:false}}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.8,
            }}
            className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 flex justify-center items-center bg-[#E7A020] rounded-full">
                <FontAwesomeIcon
                  icon={faJs}
                  className="text-white text-4xl font-bold"
                />
              </div>
              <h1 className="text-xl text-[#E7A020] font-semibold mt-5">
                JavaScript
              </h1>
            </motion.div>

            {/* React */}
            <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{once:false}}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.9,
            }}
            className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 flex justify-center items-center bg-[#28A9E0] rounded-full">
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-white text-4xl font-bold"
                />
              </div>
              <h1 className="text-xl text-[#28A9E0] font-semibold mt-5">
                React JS
              </h1>
            </motion.div>

            {/* MySql */}
            <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{once:false}}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 1,
            }}
            className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 flex justify-center items-center bg-[#00758f] rounded-full">
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="text-white text-4xl font-bold"
                />
              </div>
              <h1 className="text-xl text-[#28A9E0] font-semibold mt-5">
                 My Sql
              </h1>
            </motion.div>

            {/* PHP */}
            <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{once:false}}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 1.1,
            }}
            className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 flex justify-center items-center bg-[#777BB3] rounded-full">
                <FontAwesomeIcon
                  icon={faPhp}
                  className="text-white text-4xl font-bold"
                />
              </div>
              <h1 className="text-xl text-[#777BB3] font-semibold mt-5">PHP</h1>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;

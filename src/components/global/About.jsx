import AboutImg from "../../assets/about.jpeg";
import AboutRight from "../../assets/about-left.png"; 
import {motion} from "framer-motion"

const About = () => {
  return (
    <main className="relative bg-[#1A1E23] min-h-screen">
      <section className="relative min-h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${AboutImg})` }}
        />

        {/* Container */}
        <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 justify-start items-center pt-20 px-4 sm:px-8">
          {/* Content */}
          <div className="flex flex-col justify-start items-start">
            {/* Header */}
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:false}}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.2,
            }}
            className="flex items-center justify-center py-2 px-6 sm:px-10 rounded-tl-[30px] rounded-br-[30px] bg-[#292F36] border-4 border-[#12F7D6] shadow-lg">
              <h1 className="text-2xl sm:text-3xl text-white font-bold">About Me</h1>
            </motion.div>

            {/* Description */}
            <motion.div
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{once:false}}
             transition={{
               type: "spring",
               stiffness: 60,
               damping: 10,
               delay: 0.4,
             }}
            className="mt-6 sm:mt-8 w-full p-6 sm:p-8 bg-[#292F36] rounded-3xl shadow-lg">
              <p className="text-base sm:text-lg text-[#12F7D6]">{"<p>"}</p>
              <h2 className="text-xl sm:text-2xl text-[#12F7D6] mt-2">Hello!</h2>
              <div className="text-white text-[13px] sm:text-[14.5px] mt-4 leading-relaxed">
                <p className="mb-2">
                  My name is Yash Parmar, and I specialize in web development that
                  utilizes HTML, CSS, JS, and React.
                </p>
                <p className="mb-2">
                  I am a highly motivated individual and an eternal optimist,
                  dedicated to writing clear, concise, robust code that works. I
                  strive to never stop learning and improving.
                </p>
                <p className="mb-2">
                  When I{"'"}m not coding, I enjoy writing blogs, reading, or picking
                  up new hands-on art projects like photography.
                </p>
                <p className="mb-2">
                  I like to have my perspectives and belief systems challenged so
                  that I see the world through new eyes.
                </p>
              </div>
              <p className="text-base sm:text-lg text-[#12F7D6]">{"</p>"}</p>
            </motion.div>
          </div>

          {/* Image */}
          <div className="w-full flex justify-center items-center">
            <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{once:false}}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.3,
            }}
              src={AboutRight} // Replace with the actual image path
              alt="Coding"
              className="rounded-3xl shadow-lg max-w-full h-auto object-cover p-5 md:p-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

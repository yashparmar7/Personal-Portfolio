import {
    faGithub,
    faInstagram,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
  import { faCopyright } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { motion } from "framer-motion";
  
  const Footer = () => {
    return (
      <footer className="w-full bg-[#1A1E23] border-t-2 border-[#43454D]">
        <div className="container mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.2,
            }}
          >
            <h1 className="text-[13px] tracking-widest">
              <FontAwesomeIcon icon={faCopyright} className="mr-2" />
              2024 Yash Parmar. All rights reserved.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.4,
            }}
            className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4"
          >
            <h1 className="text-[13px] tracking-widest">Privacy Policy</h1>
            <h1 className="text-[13px] tracking-widest">Terms & Conditions</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.6,
            }}
            className="flex justify-center items-center space-x-4"
          >
            <a
              href="https://www.instagram.com/__yashhh_x/"
              target="_blank"
              className="w-6 h-6 flex justify-center items-center rounded-full bg-[#98FAEC] text-black"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/Yashparmar7"
              target="_blank"
              className="w-6 h-6 flex justify-center items-center rounded-full bg-[#98FAEC] text-black"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-parmar-8367a025b/"
              target="_blank"
              className="w-6 h-6 flex justify-center items-center rounded-full bg-[#98FAEC] text-black"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.8,
            }}
          >
            <h1 className="text-[13px] tracking-widest">
              Design By
              <a
                href="https://www.instagram.com/__yashhh_x/"
                target="_blank"
                className="ml-1 text-[#12F7D6] underline underline-offset-4"
              >
                Yash Parmar
              </a>
            </h1>
          </motion.div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
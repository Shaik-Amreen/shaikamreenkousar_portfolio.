import { motion } from "framer-motion";
import Intro from '../assets/Intro.png'
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const buttonVariants = {
    initial: {
        scale: 1,
        // border: '1px solid white',
        color: '#fff',

    },
    hover: {
        scale: 1.2,
        backgroundColor: '#ffffff',
        transition: {
            duration: 0.2,
            yoyo: 5, // animate back and forth 5 times
        },

    },
    tap: {
        scale: 0.9,
        backgroundColor: '#1c3d5a',
        color: '#ccc',
        transition: {
            duration: 0.1,
        },
    },
};

const Introduction = () => {
    return (
        <div className="introBody" style={{ padding: "0rem"}}>
            <div className="md:px-20 lg:px-24  text-center  md:text-left  flex flex-wrap justify-evenly md:items-center introPart" style={{ paddingTop: '0rem' }} >

                <div style={{ zIndex: 0 }} className="flex-1 ">
                    <motion.div
                        className="textContainer"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.h1 className="text-xl md:text-4xl" variants={textVariants}>
                            Hey ! I'm
                        </motion.h1>

                        <motion.h2 className="text-xl md:text-2xl mt-2" variants={textVariants}>Shaik Amreen Kousar</motion.h2>

                        <motion.h1 className="text-3xl md:text-6xl positionTextGradient mt-5" variants={textVariants}>
                            Full Stack Developer
                        </motion.h1>
                        <motion.div variants={textVariants} className="buttons mt-5 mb-3 md:mt-10 md:mb-0 " style={{ zIndex: 1000 }}>
                            <motion.button
                                variants={buttonVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                className="p-2 px-6 rounded-full custom-gradient-border flex items-center"
                            >
                                <motion.h2>Reach out &nbsp;</motion.h2>
                                <i class='bx bxs-chevron-down-circle '></i>
                            </motion.button>

                        </motion.div>

                    </motion.div>
                </div>


                <div style={{ zIndex: 0, bottom: 0 }}>
                    <img src={Intro} alt="" className="w-72 md:w-64 lg:w-96" />
                </div>
            </div>

            <marquee scrollamount="20" style={{ height: "130px" }}>
                <span className="opacity-20 poppins-extrabold text-8xl md:text-9xl" >
                    Frontend Developer, Backend Developer, Full Stack Developer,UI Designer.
                </span>
            </marquee>


        </div>
    );
};

export default Introduction;

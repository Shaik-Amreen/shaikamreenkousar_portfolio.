// import React from 'react'
// import { motion } from 'framer-motion'
// function About() {
//     return (
//         <div className='md:h-screen px-5 md:px-20 lg:px-40 flex items-center '>
//             <div>
//                 <motion.h1 className='text-4xl'>About</motion.h1>
//                 <motion.h2>I am a Full Stack Developer at Infobell IT - AMD
//                      | MongoDB, Express.js, Angular, Node.js, React, React Native | 
//                      Crafting Innovative Solutions for Web and Mobile | Open to Collaborations and Exciting Projects.</motion.h2>
//                 <motion.h2>Let's work together to bring your ideas to life!</motion.h2>
//             </div>
//         </div>
//     )
// }

// export default About


import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "./reusable/CursorBlinker";

export default function About() {
    const textIndex = useMotionValue(0);
    const texts = [
        " Freelancer.",
        " Full Stack Developer at Infobell IT - AMD",
        " Ui Designer",
        " SASS Developer",
        " Founder of arikya.in",

    ];



    const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.get().slice(0, latest)
    );
    const updatedThisRound = useMotionValue(true);

    useEffect(() => {
        animate(count, 60, {
            type: "tween",
            duration: 2,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            onUpdate(latest) {
                if (updatedThisRound.get() === true && latest > 0) {
                    updatedThisRound.set(false);
                } else if (updatedThisRound.get() === false && latest === 0) {
                    if (textIndex.get() === texts.length - 1) {
                        textIndex.set(0);
                    } else {
                        textIndex.set(textIndex.get() + 1);
                    }
                    updatedThisRound.set(true);
                }
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className='md:h-screen px-5 md:px-20 lg:px-40 py-20 flex '>
        <div>
            <motion.h1 className='text-6xl positionTextGradient'>About</motion.h1>

            <div className="mt-4">
                I am  <br />
                <motion.span className="inline  text-4xl">{displayText}</motion.span>
                <CursorBlinker />
            </div>
        </div>
    </div>
}


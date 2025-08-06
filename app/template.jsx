"use client";

import { motion } from "framer-motion";

//hooks
import useScrollProgress from "@/hooks/userScrollProgress";

//variants 
const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
};

const Template = ({ children }) => {
    const completion = useScrollProgress();
    //This hook probably tracks how much the user has scrolled on the page — likely returning a percentage value
    
    return (
        <>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{ type: 'linear', delay: 0.2, duration: 0.5 }}

            ></motion.div>

            <span style={{ transform: `translateY(${completion - 100}%)` }}
                className="fixed top-0 right-0 bottom-0 z-50 w-1 bg-primary transition-all duration-700 "></span>
            <div className="h-[4000px]" ></div>

        </>
    )
}

export default Template

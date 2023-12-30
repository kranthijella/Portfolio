import { motion } from "framer-motion";

import { styles } from "../style";
import { staggerContainer } from "../utils/motion";
import Bee from "../pages/Bee.jsx";
import {Canvas} from "@react-three/fiber";
import React from "react";

const StarWrapper = (Component, idName) =>
    function HOC() {
        return (
            <div>
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} w-full relative z-0`}
            >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

                <Component />
            </motion.section>
            </div>
        );
    };

export default StarWrapper;
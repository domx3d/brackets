import React, {useRef, useEffect} from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

const textVariants = {
  visible: { pathLength: 1, transition: { duration: 2.5, delay:0.2 } },
  hidden: { pathLength: 0 }
};

export default function HowPath(props) {
  
  const ref = useRef();
  const inView = useInView(ref)
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.path
      style={{
        strokeWidth: 1.0583,
        strokeLinecap: "square",
        strokeLinejoin: "bevel",
        fill: "none",
        stroke: "#ffffff",
      }}
      d={props.d}

      ref={ref}
      animate={controls}
      initial="hidden"
      variants={textVariants}
    />
  )
}

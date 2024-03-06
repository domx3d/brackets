import React, {useRef, useEffect} from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

const textVariants = {
  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.7, delay:0.2 } },
  hidden: { opacity: 0, scaleX: 0 }
};

const textLeftVariants = {
  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.7, delay:0.2 } },
  hidden: { opacity: 0, scaleX: 0 }
};

function SvgRightText(props) {
  const ref = useRef();
  const inView = useInView(ref)
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.text
    x={props.x}
    y={props.y}
    fill="#ffffff"
    fontFamily="monospace"
    fontSize="5.8208px"
    stopColor="#000000"
    strokeLinecap="square"
    strokeLinejoin="bevel"
    strokeWidth={1.0583}
    text-align="end"
    textAnchor="end"
    style={{
      lineHeight: 1.1,
    }}
    xmlSpace="preserve"
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={textVariants}
  >
    {props.children}
  </motion.text>
    
  )
}

function SvgLeftText(props) {
  const ref = useRef();
  const inView = useInView(ref)
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.text
      x={props.x}
      y={props.y}
      fill="#ffffff"
      fontFamily="monospace"
      fontSize="5.8208px"
      stopColor="#000000"
      strokeLinecap="square"
      strokeLinejoin="bevel"
      strokeWidth={1.0583}
      style={{
        lineHeight: 1.1,
      }}
      xmlSpace="preserve"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={textLeftVariants}
      >
      {props.children}
    </motion.text>
        
  )
}

export {SvgRightText, SvgLeftText};
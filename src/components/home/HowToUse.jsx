import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation, easeOut, useScroll } from 'framer-motion';
import { SvgRightText, SvgLeftText } from './HowToSvgText';
import HowPath from './HowPath';

export default function HowToUse() {

  return (
    <div className='text-slate-900 w-full h-full md:max-w-[1240px] p-4 flex flex-col justify-center items-center overflow-hidden  mt-16 md:mt-24 mb-24'>
       {/* <h1 className=' text-amber-100 font-bold text-xl md:text-2xl lg:text-3xl mt-12 md:mt-24 mb-12'>
        How it works 
        
      </h1> */}
{/*       <div className='flex flex-col gap-8'>
        
          <p className='instructions-p'>First create teams <b>(max. 32)</b> and 
          set their <b>names</b> that you want displayed in brackets.</p>
          <p className='instructions-p'>You can also add <b>players</b> to each team (optional).</p>
          <p className='instructions-p'>First time you switch to <b>brackets tab</b>, brackets are automatically generated.</p>
          <p className='instructions-p'>To <b>create new</b> brackets (or <b>reset</b>) click <i>Create Brackets</i>.</p>
          <p className='instructions-p'>You can <b>manually fill</b> the brackets at <i>first stage</i> or use one of the <b>fill options</b>(ordered or random).</p>
          <p className='instructions-p'>To <b>remove</b> team from bracket at <i>first stage</i> select empty in dropdown,
          to remove at <i>later stages</i> hold it for 2 seconds. </p>
          <p className='instructions-p'>Teams and brackets are saved locally in the browser. This means if you exit the page they are still there.</p>
        </div> */}
          <PathSvg />
    </div>
  )
}

const howTitleVariants = {
  visible: { opacity: 1, scaleX: 1, x: -16.51, y:-5.9542, transition: { duration: 1, ease: easeOut } },
  hidden: { opacity: 0, scaleX: 1, x: -45, y:-5.9542 }
};

const PathSvg = (props) => {
  
  const ref1 = useRef();
  const inView1 = useInView(ref1, {once: true})
  const controls = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
  }, [controls, inView1]);

  return (
    <svg
    className='w-[90%] w-max-[940px]'
    
    viewBox="0 0 159.23 227.2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-23.636 -23.72)">
      <g
        /* transform="translate(-16.51 -5.9542)" */
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={1.0583}
      >
{/*         <motion.path
          id="snake"
          d="m 88.289278,31.565318 90.866692,0.222495 c 1.91039,0.0047 3.44494,1.546039 3.43994,3.456333 l -0.0596,24.359927 c -0.005,1.910395 -1.32404,3.445146 -3.45684,3.439946 L 37.769896,62.69801 m 84.229744,0.206244 -94.192713,-0.230639 c -1.910394,-0.0047 -3.452131,1.529052 -3.456831,3.439346 l -0.05965,24.359927 c -0.0047,1.910394 1.307152,3.451633 3.439946,3.456833 L 171.54996,94.281876 M 77.139244,94.050703 178.99889,94.300116 c 1.91039,0.0047 3.44495,1.545939 3.43995,3.456233 l -0.0596,24.359931 c -0.005,1.91039 -1.32404,3.44494 -3.45683,3.43994 L 37.612831,125.21021 m 84.229749,0.20625 -94.192719,-0.23064 c -1.910395,-0.005 -3.452132,1.52905 -3.456832,3.43934 l -0.05965,24.35993 c -0.0047,1.91039 1.307153,3.45183 3.439946,3.45683 l 143.819565,0.35216 m -94.410713,-0.23117 101.859743,0.24941 c 1.9104,0.005 3.44495,1.54594 3.43995,3.45623 l -0.0597,24.35993 c -0.005,1.91039 -1.32404,3.44494 -3.45683,3.43994 l -141.309576,-0.346 m 84.229746,0.20624 -94.192716,-0.23064 c -1.910394,-0.005 -3.452132,1.52905 -3.456832,3.43935 l -0.05965,24.35992 c -0.0047,1.9104 1.307153,3.45184 3.439946,3.45684 l 143.819572,0.35215 m -94.41072,-0.23117 101.85974,0.24941 c 1.9104,0.005 3.44495,1.54594 3.43995,3.45623 l -0.0597,24.35993 c -0.005,1.9104 -1.32403,3.44495 -3.45683,3.43995 L 37.298695,250.23462"
          fill="none"
          stopColor="#000000"
          stroke="#fff"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: props.scrollYProgress / 2 }}
          transition={{ duration: 5,  ease: "easeIn" }}
        /> */}
        <HowPath
          d="m 76.82511,219.07511 101.85974,0.24941 c 1.9104,0.005 3.44495,1.54594 3.43995,3.45623 l -0.0597,24.35993 c -0.005,1.9104 -1.32403,3.44495 -3.45683,3.43995 L 37.298695,250.23462"
          id="path615" />
        <HowPath
            d="m 121.68551,187.92866 -94.192716,-0.23064 c -1.910394,-0.005 -3.452132,1.52905 -3.456832,3.43935 l -0.05965,24.35992 c -0.0047,1.9104 1.307153,3.45184 3.439946,3.45684 l 143.819572,0.35215"
            id="path613" />
        <HowPath
            d="m 76.982177,156.56291 101.859743,0.24941 c 1.9104,0.005 3.44495,1.54594 3.43995,3.45623 l -0.0597,24.35993 c -0.005,1.91039 -1.32404,3.44494 -3.45683,3.43994 l -141.309576,-0.346"
            id="path560" />
        <HowPath
            d="m 121.84258,125.41646 -94.192719,-0.23064 c -1.910395,-0.005 -3.452132,1.52905 -3.456832,3.43934 l -0.05965,24.35993 c -0.0047,1.91039 1.307153,3.45183 3.439946,3.45683 l 143.819565,0.35216"
            id="path558" />
        <HowPath
            d="m 77.139244,94.050703 101.859646,0.249413 c 1.91039,0.0047 3.44495,1.545939 3.43995,3.456233 l -0.0596,24.359931 c -0.005,1.91039 -1.32404,3.44494 -3.45683,3.43994 L 37.612831,125.21021"
            id="path556" />
        <HowPath
            d="M 121.99964,62.904254 27.806927,62.673615 c -1.910394,-0.0047 -3.452131,1.529052 -3.456831,3.439346 l -0.05965,24.359927 c -0.0047,1.910394 1.307152,3.451633 3.439946,3.456833 l 143.819568,0.352155"
            id="path554" />
        <HowPath
            d="m 88.289278,31.565318 90.866692,0.222495 c 1.91039,0.0047 3.44494,1.546039 3.43994,3.456333 l -0.0596,24.359927 c -0.005,1.910395 -1.32404,3.445146 -3.45684,3.439946 L 37.769896,62.69801"
            id="path626" /> 
        <motion.text
          x={40.037823}
          y={37.417824}
          fill="#ffffff"
          fontFamily="monospace"
          fontSize="9.525px"
          fontWeight="bold"
          stopColor="#000000"
          style={{
            lineHeight: 1.1,
          }}
          xmlSpace="preserve"
          ref={ref1}
          animate={controls}
          initial="hidden"
          variants={howTitleVariants}
        >
          <tspan x={40.037823} y={37.417824} strokeWidth={1.0583}>
            {"How it works"}
          </tspan>
          <tspan x={40.037823} y={47.895325} />
        </motion.text>
      </g>

      <SvgRightText
        x={177.75552}
        y={45.415787}
      >
        <tspan x={177.75552} y={45.415787} text-align="end">
          {"Create and rename"}
        </tspan>
        <tspan x={177.75552} y={51.818699} text-align="end">
          {"your teams (max 32)"}
        </tspan>
      </SvgRightText>

      <SvgLeftText
        x={29.834341}
        y={77.165779}
      >
        <tspan x={29.834341} y={77.165779}>
          {"You can also add "}
        </tspan>
        <tspan x={29.834341} y={83.568695}>
          {"players (optional)"}
        </tspan>
      </SvgLeftText>

      <SvgRightText
        x={177.75552}
        y={108.12204}
      >
        <tspan x={177.75552} y={108.12204} text-align="end">
          {"Switching to "}
          <tspan fontFamily="monospace" fontStyle="italic">
            {"brackets"}
          </tspan>
          {" tab"}
        </tspan>
        <tspan x={177.75552} y={114.52496} text-align="end">
          {"generates them automatically"}
        </tspan>
      </SvgRightText>

      <SvgLeftText
        x={29.834341}
        y={140.00432}
      >
        <tspan x={29.834341} y={140.00432}>
          {"If you need to reset"}
        </tspan>
        <tspan x={29.834341} y={146.40723}>
          {"click "}
          <tspan fontFamily="monospace" fontStyle="italic">
            {"create brackets"}
          </tspan>
        </tspan>
      </SvgLeftText>

      <SvgRightText
        x={177.75552}
        y={170.82829}
      >
        <tspan x={177.75552} y={170.82829} text-align="end">
          {"Fill manually or use"}
        </tspan>
        <tspan x={177.75552} y={177.2312} text-align="end">
          <tspan fontFamily="monospace" fontStyle="italic">
            {"ordered"}
          </tspan>
          {"/"}
          <tspan fontFamily="monospace" fontStyle="italic">
            {"random"}
          </tspan>
          {" fill"}
        </tspan>
      </SvgRightText>

      <SvgLeftText
        x={29.834341}
        y={201.51994}
      >
        <tspan x={29.834341} y={201.51994}>
          {"To remove team from"}
        </tspan>
        <tspan x={29.834341} y={207.92285}>
          {"brackets, hold for 2 s"}
        </tspan>
      </SvgLeftText>

      <SvgRightText
        x={177.75552}
        y={232.7408}
      >
        <tspan x={177.75552} y={232.7408} text-align="end">
          {"Teams and brackets are "}
        </tspan>
        <tspan x={177.75552} y={239.14371} text-align="end">
          {"saved locally in the browser"}
        </tspan>
      </SvgRightText>
    </g>
  </svg>
)}

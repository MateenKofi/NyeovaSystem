import React, { useEffect, useRef } from 'react'
import {motion, useInView, useAnimation} from 'framer-motion'
const FadeIn = ({children}) => {
  const ref =useRef()
  const {inView} = useInView()
  const animation = useAnimation()

  const fadeInUp = {
    opacity:0,
    y:50,
  }
  const inViewVariant ={
    opacity:1,
    y:0,
  }

  const animateOnInView = () =>{
    animation.start(inViewVariant)
  }
  useEffect(()=>{
    if(inView){
      animateOnInView()
    }
  },[inView])
  
  return (
    <motion.div
    initial={fadeInUp}
    animate={animation}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
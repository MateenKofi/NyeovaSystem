import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SlideInFromRight = ({children}) => {
    const [ref,inView] = useInView({
        triggerOnce:true,
        threshold:0.5
    })
  return (
   <motion.div
   ref={ref}
   initial={{x:'100%'}}
   animate={{x:inView ? 0 : '100%'}}
   transition={{duration:0.3}}
   className='grid place-items-center'
   >
    {children}
   </motion.div>
  )
}

export default SlideInFromRight
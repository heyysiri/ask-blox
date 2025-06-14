import { useState } from 'react'
import { motion } from 'motion/react'

export function FlipButton({ text1, text2 }:{text1: string, text2: string}) {
  const [show, setShow] = useState(false)
  const flipVariants = {
    one: {
      rotateX: 0,
      background: 'linear-gradient(to right, #475569, #1e293b, #0f172a)',
      color: '#ffffff',
    },
    two: {
      rotateX: 180,
      background: 'white',
      color: 'black',
    },
  }

  return (
      <div className="w-full max-w-[270px]">
        <motion.button
          className="w-full cursor-pointer px-6 py-3 font-medium"
          style={{
            borderRadius: 999,
          }}
          onClick={() => setShow(!show)}
          animate={show ? 'two' : 'one'}
          variants={flipVariants}
          transition={{ duration: 0.6, type: 'spring' }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ rotateX: show ? 180 : 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            {show ? text1 : text2}
          </motion.div>
          <motion.div
            animate={{ rotateX: show ? 0 : -180 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="absolute inset-0"
          ></motion.div>
        </motion.button>
      </div>
  );
}; 
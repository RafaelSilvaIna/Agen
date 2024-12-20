'use client'

import { motion } from 'framer-motion'

export function AnimatedCalendar() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white rounded-lg shadow-2xl p-4 w-[300px]"
      >
        <div className="text-center mb-4 bg-primary/10 rounded-md p-2">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-bold text-primary"
          >
            Dezembro 2023
          </motion.div>
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
            <motion.div
              key={day + i}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-center text-sm font-medium text-gray-600"
            >
              {day}
            </motion.div>
          ))}
          
          {Array.from({ length: 31 }, (_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.02 }}
              className={`text-center p-1 rounded-full text-sm
                ${i + 1 === 19 ? 'bg-primary text-white' : 'hover:bg-gray-100'}
              `}
            >
              {i + 1}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 h-2 bg-primary/20 rounded-full"
        />
      </motion.div>

      {/* Elementos decorativos animados */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute top-1/4 right-1/4 w-20 h-20 bg-primary/10 rounded-full"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-primary/20 rounded-full"
      />
    </div>
  )
}


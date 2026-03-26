'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ isLoaded }: { isLoaded: boolean }) {
  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="preloader"
        >
          <div className="relative flex items-center justify-center">
            {/* Spinning ring */}
            <div className="absolute w-28 h-28 border-[1.5px] border-accent/30 rounded-[1.8rem] animate-[spin_2s_linear_infinite]" />
            {/* D box */}
            <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center">
              <span className="heading-ld text-4xl text-gradient-accent font-display font-bold">D</span>
            </div>
          </div>

          <div className="text-center mt-4 space-y-2">
            <h2 className="heading-md text-gradient">Devduo</h2>
            <p className="text-light/60 tracking-widest text-sm uppercase font-medium">Crafted for Growth</p>
          </div>

          <div className="w-64 h-[2px] bg-accent/20 mt-8 overflow-hidden rounded-full">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="w-full h-full text-gradient-accent bg-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

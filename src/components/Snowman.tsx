import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Snowman = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.div
      ref={ref}
      className="relative w-48 h-72 md:w-56 md:h-80 flex flex-col items-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "backOut" }}
    >
      {/* Hat */}
      <div className="relative z-20 mb-[-8px]">
        <div className="w-20 h-3 bg-burgundy rounded-sm" />
        <div className="w-14 h-12 bg-burgundy mx-auto rounded-t-sm" />
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4">
          <div className="w-3 h-3 rounded-full bg-rose-soft" />
        </div>
      </div>

      {/* Head */}
      <motion.div 
        className="relative z-10 w-24 h-24 bg-snow rounded-full shadow-lg flex-shrink-0"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Eyes */}
        <div className="absolute top-6 left-5 w-2.5 h-2.5 bg-burgundy rounded-full" />
        <div className="absolute top-6 right-5 w-2.5 h-2.5 bg-burgundy rounded-full" />
        
        {/* Carrot nose */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-orange-400 rotate-180" />
        
        {/* Smile */}
        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-8 h-3 border-b-2 border-burgundy rounded-b-full" />
        
        {/* Blush */}
        <div className="absolute top-10 left-2 w-4 h-2 bg-rose-soft/50 rounded-full" />
        <div className="absolute top-10 right-2 w-4 h-2 bg-rose-soft/50 rounded-full" />
      </motion.div>

      {/* Scarf */}
      <div className="relative z-20 mt-[-12px] mb-[-16px]">
        <div className="w-28 h-4 bg-accent rounded-full" />
        <div className="absolute -right-2 top-2 w-4 h-14 bg-accent rounded-b-lg rotate-12" />
      </div>

      {/* Body */}
      <div className="relative w-32 h-32 bg-snow rounded-full shadow-lg flex-shrink-0">
        {/* Buttons */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-burgundy rounded-full" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-burgundy rounded-full" />
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-3 h-3 bg-burgundy rounded-full" />
        
        {/* Arms */}
        <div className="absolute top-4 -left-8 w-10 h-2 bg-amber-700 rounded-full rotate-[-30deg]" />
        <div className="absolute top-4 -right-8 w-10 h-2 bg-amber-700 rounded-full rotate-[30deg]" />
      </div>
    </motion.div>
  );
});

Snowman.displayName = 'Snowman';

export default Snowman;

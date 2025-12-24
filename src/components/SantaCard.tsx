import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SantaCardProps {
  onReveal: () => void;
}

const SantaCard = ({ onReveal }: SantaCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      onReveal();
    }
  };

  return (
    <motion.div
      className="perspective cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            className="w-56 h-72 md:w-64 md:h-80 rounded-2xl bg-snow shadow-romantic overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {/* Santa illustration */}
            <div className="h-2/3 bg-gradient-to-b from-blush to-cream-warm flex items-center justify-center relative overflow-hidden">
              {/* Simple Santa face */}
              <div className="relative">
                {/* Hat */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-16">
                  <div className="w-full h-12 bg-accent rounded-t-full" />
                  <div className="absolute bottom-0 w-full h-3 bg-snow rounded-full" />
                  <div className="absolute -top-2 right-0 w-5 h-5 bg-snow rounded-full" />
                </div>
                
                {/* Face */}
                <div className="w-24 h-24 bg-cream-warm rounded-full relative">
                  {/* Eyes */}
                  <div className="absolute top-7 left-5 w-3 h-3 bg-burgundy rounded-full" />
                  <div className="absolute top-7 right-5 w-3 h-3 bg-burgundy rounded-full" />
                  
                  {/* Rosy cheeks */}
                  <div className="absolute top-10 left-2 w-5 h-3 bg-rose-soft/60 rounded-full" />
                  <div className="absolute top-10 right-2 w-5 h-3 bg-rose-soft/60 rounded-full" />
                  
                  {/* Nose */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-soft rounded-full" />
                  
                  {/* Mustache */}
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 w-16 h-4 bg-snow rounded-full" />
                  
                  {/* Beard */}
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-14 bg-snow rounded-b-full" />
                </div>
              </div>
            </div>
            
            {/* Card text */}
            <div className="h-1/3 flex items-center justify-center p-4">
              <p className="font-romantic text-xl text-burgundy text-center">Tap to read</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

export default SantaCard;

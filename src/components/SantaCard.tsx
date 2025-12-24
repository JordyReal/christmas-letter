import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import santaSleigh from '@/assets/cute-santa-sleigh.png';

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
            <div className="h-2/3 bg-gradient-to-b from-blush to-cream-warm flex items-center justify-center p-4">
              <img 
                src={santaSleigh} 
                alt="Cute Santa on his sleigh" 
                className="w-full h-full object-contain"
              />
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

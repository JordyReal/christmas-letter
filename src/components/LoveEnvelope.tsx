import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface LoveEnvelopeProps {
  onReveal: () => void;
}

const LoveEnvelope = ({ onReveal }: LoveEnvelopeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      onReveal();
    }
  };

  return (
    <motion.div
      className="cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            className="relative w-64 h-48 md:w-80 md:h-56"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            {/* Envelope body */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fff5f5] to-[#ffe4e6] rounded-lg shadow-xl overflow-hidden border border-[#fecdd3]">
              {/* Envelope flap */}
              <div 
                className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#fda4af] to-[#ffe4e6]"
                style={{
                  clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                }}
              />
              
              {/* Envelope bottom fold lines */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2">
                <div 
                  className="absolute inset-0 border-t-2 border-[#fecdd3]"
                  style={{
                    clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                  }}
                />
              </div>
              
              {/* Heart seal */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                animate={{ 
                  scale: [1, 1.15, 1],
                }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart 
                  className="w-16 h-16 md:w-20 md:h-20 text-[#be123c] drop-shadow-lg" 
                  fill="#be123c"
                />
              </motion.div>
            </div>
            
            {/* Tap hint */}
            <motion.p 
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-romantic text-lg text-burgundy whitespace-nowrap"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Tap to open
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

export default LoveEnvelope;

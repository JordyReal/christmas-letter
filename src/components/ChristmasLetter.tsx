import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChristmasLetterProps {
  onReveal: () => void;
}

const ChristmasLetter = ({ onReveal }: ChristmasLetterProps) => {
  const [stage, setStage] = useState<'closed' | 'partial' | 'open'>('closed');

  const handleClick = () => {
    if (stage === 'closed') {
      setStage('partial');
    } else if (stage === 'partial') {
      setStage('open');
      setTimeout(() => {
        onReveal();
      }, 1500);
    }
  };

  return (
    <motion.div
      className="cursor-pointer perspective"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        {stage === 'closed' && (
          <motion.div
            key="closed"
            className="relative w-64 h-44 md:w-80 md:h-56"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            exit={{ opacity: 0 }}
          >
            {/* Envelope back */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg shadow-romantic border-2 border-rose-300" />
            
            {/* Envelope flap */}
            <div 
              className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-rose-200 to-rose-150 rounded-t-lg"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                background: 'linear-gradient(180deg, #fecdd3 0%, #ffe4e6 100%)',
              }}
            />
            
            {/* Heart seal */}
            <motion.div 
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-10 h-10 bg-burgundy rounded-full flex items-center justify-center shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-snow text-lg">💌</span>
            </motion.div>
            
            {/* Tap hint */}
            <motion.p
              className="absolute bottom-4 left-0 right-0 text-center font-elegant text-burgundy/70 text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Tap to open
            </motion.p>
          </motion.div>
        )}

        {stage === 'partial' && (
          <motion.div
            key="partial"
            className="relative w-64 h-56 md:w-80 md:h-72"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Envelope opened */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg shadow-romantic border-2 border-rose-300" />
            
            {/* Letter peeking out */}
            <motion.div 
              className="absolute top-4 left-4 right-4 bottom-8 bg-snow rounded-lg shadow-md p-4 overflow-hidden"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="font-romantic text-burgundy text-lg md:text-xl text-center leading-relaxed">
                Dear Avy,
              </p>
              <p className="font-elegant text-burgundy/80 text-sm md:text-base mt-3 text-center italic">
                This Christmas, I just want you to know how special you are to me...
              </p>
              
              <motion.p
                className="absolute bottom-2 left-0 right-0 text-center font-elegant text-blush text-xs"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Tap to read more
              </motion.p>
            </motion.div>
            
            {/* Open flap */}
            <div 
              className="absolute -top-8 left-0 right-0 h-12"
              style={{
                clipPath: 'polygon(0 100%, 100% 100%, 50% 0)',
                background: 'linear-gradient(0deg, #fecdd3 0%, #ffe4e6 100%)',
              }}
            />
          </motion.div>
        )}

        {stage === 'open' && (
          <motion.div
            key="open"
            className="w-72 md:w-96 bg-snow rounded-lg shadow-romantic p-6 md:p-8"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="font-romantic text-burgundy text-xl md:text-2xl text-center mb-4">
                Dear Avy,
              </p>
              <p className="font-elegant text-burgundy/80 text-sm md:text-base text-center leading-relaxed">
                This Christmas, I just want you to know how special you are to me.
                <br /><br />
                You are not just part of my life, you are the reason behind so many smiles...
              </p>
              
              <motion.div 
                className="mt-4 text-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: 2 }}
              >
                <span className="text-2xl">❤️</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ChristmasLetter;

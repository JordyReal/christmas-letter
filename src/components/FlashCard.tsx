import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FlashCardProps {
  word: string;
  delay?: number;
  onFlip?: () => void;
}

const FlashCard = ({ word, delay = 0, onFlip }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      onFlip?.();
    }
  };

  return (
    <motion.div
      className="perspective w-24 h-32 md:w-28 md:h-36 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front (face down - pink with heart) */}
        <div 
          className="absolute inset-0 backface-hidden rounded-xl bg-gradient-to-br from-primary to-rose-soft shadow-romantic flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Heart className="w-10 h-10 text-snow fill-snow/80" />
        </div>

        {/* Back (face up - word revealed) */}
        <div 
          className="absolute inset-0 backface-hidden rounded-xl bg-snow shadow-romantic flex items-center justify-center rotate-y-180 border-2 border-rose-soft/30"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="font-romantic text-2xl md:text-3xl text-burgundy">{word}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlashCard;

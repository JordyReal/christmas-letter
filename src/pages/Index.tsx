import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Snowflakes from '@/components/Snowflakes';
import PresentBox from '@/components/PresentBox';
import Snowman from '@/components/Snowman';
import FlashCard from '@/components/FlashCard';
import SantaCard from '@/components/SantaCard';
import FinalMessage from '@/components/FinalMessage';
import { Button } from '@/components/ui/button';

type Scene = 'opening' | 'snowman' | 'flashcards' | 'final' | 'message';

const Index = () => {
  const [scene, setScene] = useState<Scene>('opening');
  const [flippedCards, setFlippedCards] = useState<number>(0);

  const words = ['You', 'Are', 'My', 'Cutest', 'Gift'];

  const handlePresentClick = () => {
    setScene('snowman');
  };

  const handleOpenClick = () => {
    setScene('flashcards');
  };

  const handleCardFlip = () => {
    setFlippedCards((prev) => prev + 1);
  };

  useEffect(() => {
    if (flippedCards === 5) {
      const timer = setTimeout(() => {
        setScene('final');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [flippedCards]);

  const handleSantaReveal = () => {
    setScene('message');
  };

  return (
    <div className="min-h-screen bg-romantic-gradient relative overflow-hidden">
      <Snowflakes />
      
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {/* Opening Scene */}
          {scene === 'opening' && (
            <motion.div
              key="opening"
              className="flex flex-col items-center gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="font-romantic text-4xl md:text-6xl text-burgundy text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                For someone special
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "backOut" }}
              >
                <PresentBox onClick={handlePresentClick} />
              </motion.div>
            </motion.div>
          )}

          {/* Snowman Scene */}
          {scene === 'snowman' && (
            <motion.div
              key="snowman"
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <Snowman />
              
              <motion.p
                className="font-romantic text-2xl md:text-3xl text-burgundy text-center max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                This Christmas, something special for you
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Button variant="romantic" size="xl" onClick={handleOpenClick}>
                  Open it
                </Button>
              </motion.div>
            </motion.div>
          )}

          {/* Flashcards Scene */}
          {scene === 'flashcards' && (
            <motion.div
              key="flashcards"
              className="flex flex-col items-center gap-8 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="font-romantic text-3xl md:text-5xl text-burgundy text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Just for you
              </motion.h2>
              
              <motion.p
                className="font-elegant text-xl md:text-2xl text-burgundy/80 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                I don&apos;t need a gift because…
              </motion.p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {words.map((word, index) => (
                  <FlashCard
                    key={word}
                    word={word}
                    delay={0.6 + index * 0.15}
                    onFlip={handleCardFlip}
                  />
                ))}
              </div>
              
              {flippedCards < 5 && (
                <motion.p
                  className="font-elegant text-base text-muted-foreground mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  Tap each card to reveal
                </motion.p>
              )}
            </motion.div>
          )}

          {/* Final Scene with Santa Card */}
          {scene === 'final' && (
            <motion.div
              key="final"
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="font-romantic text-3xl md:text-5xl text-burgundy text-center px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                Merry Christmas to my cutiepie
              </motion.h2>
              
              <SantaCard onReveal={handleSantaReveal} />
            </motion.div>
          )}

          {/* Final Message */}
          {scene === 'message' && (
            <motion.div
              key="message"
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <FinalMessage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;

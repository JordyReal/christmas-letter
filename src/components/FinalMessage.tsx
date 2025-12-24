import { motion } from 'framer-motion';

const FinalMessage = () => {
  return (
    <motion.div
      className="max-w-lg mx-auto px-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-elegant text-lg md:text-xl leading-relaxed text-burgundy space-y-4">
        <motion.span
          className="block mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          This Christmas, I just want you to know how special you are to me.
        </motion.span>
        
        <motion.span
          className="block mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          You are not just part of my life, you are the reason behind so many smiles and little moments.
        </motion.span>
        
        <motion.span
          className="block mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          I may not be perfect, but I promise one thing — whenever you share a wish, a dream, or even a silly thought, I'll always try my best to be there for you. I don't need a gift because your presence in my life is enough.
        </motion.span>
        
        <motion.span
          className="block mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          I want this to be something we continue, side by side.
        </motion.span>
        
        <motion.span
          className="block font-romantic text-xl md:text-2xl mt-6 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
        >
          ~Bhavesh
        </motion.span>
        
        <motion.span
          className="block font-romantic text-2xl md:text-3xl mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.8, duration: 0.5 }}
        >
          Merry Christmas ❤️
        </motion.span>
      </p>
    </motion.div>
  );
};

export default FinalMessage;

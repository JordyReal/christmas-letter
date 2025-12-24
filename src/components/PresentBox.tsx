import { motion } from 'framer-motion';

interface PresentBoxProps {
  onClick: () => void;
}

const PresentBox = ({ onClick }: PresentBoxProps) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Speech bubble */}
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2 bg-snow px-4 py-2 rounded-2xl shadow-romantic"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <p className="font-romantic text-lg text-burgundy whitespace-nowrap">Tap me!</p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-snow" />
      </motion.div>

      {/* Present box */}
      <motion.div
        className="w-32 h-32 md:w-40 md:h-40 relative"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Box body */}
        <div className="absolute bottom-0 w-full h-[70%] rounded-lg bg-gradient-to-br from-rose-deep to-accent shadow-lg">
          {/* Vertical ribbon */}
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-full bg-gold-soft" />
          {/* Horizontal ribbon */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-4 bg-gold-soft" />
        </div>

        {/* Box lid */}
        <div className="absolute top-0 w-full h-[35%] rounded-t-lg bg-gradient-to-br from-accent to-rose-deep shadow-md">
          {/* Lid ribbon */}
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-full bg-gold-soft" />
          
          {/* Bow */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="relative">
              {/* Left loop */}
              <div className="absolute -left-5 top-1 w-6 h-8 rounded-full bg-gold-soft rotate-[-30deg]" />
              {/* Right loop */}
              <div className="absolute -right-5 top-1 w-6 h-8 rounded-full bg-gold-soft rotate-[30deg]" />
              {/* Center knot */}
              <div className="relative z-10 w-4 h-4 rounded-full bg-gold-soft" />
              {/* Ribbon tails */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-6 bg-gold-soft rotate-[-10deg]" />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-6 bg-gold-soft rotate-[10deg]" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PresentBox;

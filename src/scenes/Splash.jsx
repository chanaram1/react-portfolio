import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Splash = ({ onEnter }) => {
  const [isHolding, setIsHolding] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const holdDuration = 2000; // 2 seconds
  const updateInterval = 16; // Update every 16ms for 60fps

  useEffect(() => {
    let interval;
    if (isHolding && !isComplete) {
      interval = setInterval(() => {
        setHoldProgress(prev => {
          const newProgress = prev + (updateInterval / holdDuration) * 100;
          if (newProgress >= 100) {
            setIsComplete(true);
            onEnter();
            return 100;
          }
          return newProgress;
        });
      }, updateInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHolding, isComplete, onEnter]);

  const handleMouseDown = () => {
    setIsHolding(true);
  };

  const handleMouseUp = () => {
    if (!isComplete) {
      setIsHolding(false);
      setHoldProgress(0);
    }
  };

  const handleMouseLeave = () => {
    if (!isComplete) {
      setIsHolding(false);
      setHoldProgress(0);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-deep-blue z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <motion.h1 
        className="text-4xl font-playfair text-white mb-12 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Welcome to Aaron's Portfolio
      </motion.h1>
      
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <button
          className={`
            relative w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm
            border-2 border-white/20 text-white font-semibold text-lg
            transition-all duration-200 transform
            ${isHolding ? 'scale-95 border-yellow/50' : 'hover:border-white/40 hover:scale-105'}
            ${isComplete ? 'border-green/50 bg-green/20' : ''}
            focus:outline-none focus:ring-4 focus:ring-white/20
            flex items-center justify-center
          `}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          disabled={isComplete}
        >
          {/* Circular progress indicator */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={isComplete ? "#10B981" : "#FCD34D"}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: holdProgress / 100 }}
              transition={{ duration: 0.05 }}
            />
          </svg>

          {/* Button content */}
          <motion.div
            className="relative z-10 text-center"
            animate={{
              scale: isHolding ? 0.95 : 1,
              opacity: isComplete ? 0.8 : 1
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="text-sm font-medium mb-1"
              animate={{
                opacity: isHolding ? 0.7 : 1
              }}
            >
              {isComplete ? 'Welcome!' : (isHolding ? 'Hold...' : 'Hold')}
            </motion.div>
            <motion.div
              className="text-xs opacity-70"
              animate={{
                opacity: isHolding ? 0.5 : 0.7
              }}
            >
              {isComplete ? 'Entering...' : 'to Enter'}
            </motion.div>
          </motion.div>
        </button>
      </motion.div>

      <motion.p 
        className="text-white/60 mt-8 text-center max-w-md text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
      </motion.p>
    </motion.div>
  );
};

export default Splash;
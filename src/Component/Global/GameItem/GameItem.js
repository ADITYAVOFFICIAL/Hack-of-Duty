import './GameItem.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../AudioContext/AudioContext';

export default function GameItem({ image, text, description, onMouseEnter = () => {}, onMouseLeave = () => {} }) {
  const { playAudio, pauseAudio } = useAudio();
  const [isHovered, setIsHovered] = useState(false);

  // Split description into words
  const words = description.split(' ');

  // Animation variants for word animation
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isHovered) {
      playAudio(); // Play audio on hover
    } else {
      pauseAudio(); // Pause audio when not hovered
    }

    // Cleanup on component unmount
    return () => {
      // No need to pause the audio here, it's handled in context
    };
  }, [isHovered, playAudio, pauseAudio]);

  return (
    <div
      className="container-get"
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter(); // Notify parent to handle hover
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave(); // Notify parent to handle unhover
      }}
      onClick={(e) => e.preventDefault()}
    >
      <span className='text-detail'>{text}</span>
      <img src={image} alt="game images" />
      {isHovered && (
        <motion.div
          className='overlay'
          initial={{ y: '100%', opacity: 0 }} // Start from below and hidden
          animate={{ y: '0%', opacity: 1 }}   // Move to original position and visible
          exit={{ y: '100%', opacity: 0 }}    // Exit back to below and hidden
          transition={{ duration: 0.7 }}        // Duration of the overlay animation
        >
          <motion.div
            className='overlay-text'
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }, // Staggered animation
              },
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants} // Use word animation variants
                transition={{ duration: 0.5 }} // Individual word animation duration
                className='overlay-word' // Add a specific class for words
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

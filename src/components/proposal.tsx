"use client";

import { useState, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '@/contexts/app-context';
import { translations } from '@/lib/i18n';

interface ProposalProps {
  name: string;
  onAccept: () => void;
}

export default function Proposal({ name, onAccept }: ProposalProps) {
  const { language } = useContext(AppContext);
  const t = translations[language];
  
  const [noCount, setNoCount] = useState(0);

  const handleNoClick = () => {
    if (noCount < t.noButtonTexts.length - 1) {
      setNoCount(noCount + 1);
    } else {
      onAccept();
    }
  };

  const yesButtonSize = noCount * 2 + 8; // in rem
  const yesFontSize = noCount * 0.15 + 1.25; // in rem
  const noButtonOpacity = 1 - noCount * 0.15;


  return (
    <motion.div 
      className="text-center p-4 flex flex-col items-center justify-center min-h-[50vh]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <motion.h2 
        className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold text-primary"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {name}
      </motion.h2>
      
      <motion.h1 
        className="mt-6 font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {t.proposalQuestionPlain} 🤔
      </motion.h1>

      <p className="mt-4 text-lg text-foreground/80">{t.proposalSubtitle}</p>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <motion.div
          animate={{
            width: `${yesButtonSize}rem`,
            height: `${yesButtonSize / 2}rem`,
            fontSize: `${yesFontSize}rem`,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <Button
            className="w-full h-full text-lg font-bold bg-green-500 text-white hover:bg-green-600 shadow-lg transform transition-transform hover:scale-105"
            onClick={onAccept}
          >
            {t.yesButton}
          </Button>
        </motion.div>
        
        <AnimatePresence>
        { noCount < t.noButtonTexts.length -1 && (
            <motion.div
              animate={{
                opacity: noButtonOpacity,
                scale: Math.max(1 - noCount * 0.1, 0.5)
              }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0 }}
            >
            <Button
              className="font-bold bg-red-500 hover:bg-red-600 text-white shadow-md"
              onClick={handleNoClick}
              >
              {t.noButtonTexts[noCount]}
            </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

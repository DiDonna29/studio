"use client";

import { useState, useEffect, useMemo, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '@/contexts/app-context';
import { translations } from '@/lib/i18n';
import HeartIcon from './icons/heart-icon';
import RingIcon from './icons/ring-icon';
import CoupleIcon from './icons/couple-icon';

type CardType = {
  id: number;
  type: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const cardTypes = [
  { type: 'heart', Icon: HeartIcon },
  { type: 'ring', Icon: RingIcon },
  { type: 'couple', Icon: CoupleIcon },
  { type: 'heart', Icon: HeartIcon },
  { type: 'ring', Icon: RingIcon },
  { type: 'couple', Icon: CoupleIcon },
];

const generateCards = () => {
  const cards = cardTypes
    .flatMap((card, index) => [
      { id: index * 2, ...card },
      { id: index * 2 + 1, ...card },
    ])
    .sort(() => Math.random() - 0.5);
  return cards;
};

interface MemoryGameProps {
  onGameWin: () => void;
}

export default function MemoryGame({ onGameWin }: MemoryGameProps) {
  const { language } = useContext(AppContext);
  const t = translations[language];

  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    setCards(generateCards());
  }, []);

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(cards[index].type)) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].type === cards[secondIndex].type) {
        setTimeout(() => {
          setMatchedCards([...matchedCards, cards[firstIndex].type]);
          setFlippedCards([]);
        }, 800);
      } else {
        setTimeout(() => setFlippedCards([]), 1200);
      }
    }
  };
  
  const allMatched = useMemo(() => matchedCards.length === cardTypes.length, [matchedCards]);

  useEffect(() => {
    if (allMatched) {
      setTimeout(() => {
        onGameWin();
      }, 1000);
    }
  }, [allMatched, onGameWin]);


  return (
    <div className="flex flex-col items-center justify-center p-4">
      <AnimatePresence>
        {!allMatched ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-center"
          >
            <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary">{t.gameTitle}</h1>
            <p className="mt-2 text-foreground/80">{t.gameDescription}</p>
          </motion.div>
        ) : (
           <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h2 className="font-headline text-3xl font-bold text-primary">{t.gameComplete}</h2>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-8 w-full max-w-md mx-auto">
        {cards.map((card, index) => (
          <CardComponent
            key={index}
            card={card}
            isFlipped={flippedCards.includes(index) || matchedCards.includes(card.type)}
            isMatched={matchedCards.includes(card.type)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

interface CardComponentProps {
  card: CardType;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

function CardComponent({ card, isFlipped, isMatched, onClick }: CardComponentProps) {
  return (
    <div className="aspect-square perspective-1000" onClick={onClick}>
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={`absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-secondary shadow-md ${isMatched ? 'opacity-50' : ''}`}>
           <span className="text-4xl font-bold text-primary">?</span>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center rounded-lg bg-primary/20 shadow-lg border-2 border-primary">
          <card.Icon className={`w-1/2 h-1/2 text-primary ${isMatched ? 'animate-pulse' : ''}`}/>
        </div>
      </motion.div>
      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}

"use client";

import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '@/contexts/app-context';
import { translations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface QuizProps {
  onQuizWin: () => void;
}

export default function Quiz({ onQuizWin }: QuizProps) {
  const { language } = useContext(AppContext);
  const t = translations[language];
  const questions = t.quiz.questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResult(true);
        setTimeout(() => {
          onQuizWin();
        }, 1500);
      }
    } else {
      // Simple feedback for wrong answer, resets the quiz
       setCurrentQuestionIndex(0);
       // You could add a toast or message here for wrong answers
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-[50vh]">
      <AnimatePresence mode="wait">
        {showResult ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h2 className="font-headline text-3xl font-bold text-primary">{t.quiz.complete}</h2>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg"
          >
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl sm:text-4xl font-bold text-primary">{t.quiz.title}</CardTitle>
                <CardDescription className="mt-2 text-foreground/80">{t.quiz.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h2 className="text-xl sm:text-2xl font-semibold text-center text-foreground mb-6">{currentQuestion.question}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentQuestion.answers.map((answer, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto py-4 text-base whitespace-normal"
                      onClick={() => handleAnswerClick(answer.correct)}
                    >
                      {answer.text}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState } from 'react';
import MemoryGame from '@/components/memory-game';
import Proposal from '@/components/proposal';
import Celebration from '@/components/celebration';
import Header from '@/components/header';
import { Card, CardContent } from '@/components/ui/card';

type Stage = 'game' | 'proposal' | 'accepted';

export default function Home() {
  const [stage, setStage] = useState<Stage>('game');

  const handleGameWin = () => {
    setStage('proposal');
  };

  const handleProposalAccept = () => {
    setStage('accepted');
  };

  const renderStage = () => {
    switch (stage) {
      case 'game':
        return <MemoryGame onGameWin={handleGameWin} />;
      case 'proposal':
        return <Proposal onAccept={handleProposalAccept} name="Maria" />;
      case 'accepted':
        return <Celebration />;
      default:
        return null;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-background transition-colors duration-500">
      <Header />
      <div className="w-full max-w-4xl">
        <Card className="shadow-2xl rounded-2xl border-primary/20 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-4 sm:p-8">
            {renderStage()}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

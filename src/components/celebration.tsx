"use client";

import { useContext } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Confetti from './confetti';
import { AppContext } from '@/contexts/app-context';
import { translations } from '@/lib/i18n';

export default function Celebration() {
  const { language } = useContext(AppContext);
  const t = translations[language];

  // EDITAR: Reemplaza estas imágenes con tus propias fotos.
  // Sube tus imágenes a un servicio de hosting y pega las URLs aquí.
  // El `hint` ayuda a la IA a encontrar imágenes si se usan placeholders.
  const photos = [
    { src: 'https://placehold.co/600x400.png', alt: 'Couple smiling', hint: 'couple smiling' },
    { src: 'https://placehold.co/600x400.png', alt: 'Holding hands', hint: 'holding hands' },
    { src: 'https://placehold.co/600x400.png', alt: 'Sunset kiss', hint: 'sunset kiss' },
    { src: 'https://placehold.co/600x400.png', alt: 'Laughing together', hint: 'couple laughing' },
    { src: 'https://placehold.co/600x400.png', alt: 'A beautiful memory', hint: 'happy memory' },
  ];

  return (
    <div className="relative text-center p-4 animate-fade-in">
      <Confetti />
      <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary animate-pulse">{t.celebrationTitle}</h1>
      <p className="mt-4 text-lg text-foreground/80">{t.celebrationSubtitle}</p>

      <div className="mt-8 flex justify-center">
        <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-lg">
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                       <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint={photo.hint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary hover:bg-primary/20" />
          <CarouselNext className="text-primary hover:bg-primary/20" />
        </Carousel>
      </div>
    </div>
  );
}

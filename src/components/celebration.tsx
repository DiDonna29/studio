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
import { Button } from './ui/button';
import Link from 'next/link';
import { Music } from 'lucide-react';

export default function Celebration() {
  const { language } = useContext(AppContext);
  const t = translations[language];

  // EDITAR: Reemplaza estas imágenes con tus propias fotos.
  // Sube tus imágenes a un servicio de hosting y pega las URLs aquí.
  // El `hint` ayuda a la IA a encontrar imágenes si se usan placeholders.
  const photos = [
    { src: 'https://res.cloudinary.com/de41faltu/image/upload/v1755658531/5_flxqle.jpg', alt: 'Couple smiling', hint: 'couple smiling' },
    { src: 'https://res.cloudinary.com/de41faltu/image/upload/v1755658535/2_bjykno.jpg', alt: 'Holding hands', hint: 'holding hands' },
    { src: 'https://res.cloudinary.com/de41faltu/image/upload/v1755658535/1_kq1hcl.jpg', alt: 'Sunset kiss', hint: 'sunset kiss' },
    { src: 'https://res.cloudinary.com/de41faltu/image/upload/v1755658531/7_sp4xft.jpg', alt: 'Laughing together', hint: 'couple laughing' },
    { src: 'https://res.cloudinary.com/de41faltu/image/upload/v1755658531/8_w3qk3n.jpg', alt: 'A beautiful memory', hint: 'happy memory' },
    { src: 'https://res.cloudinary.com/de41faltu/image/upload/v1755658531/6_usqf3z.jpg', alt: 'A beautiful memory', hint: 'happy memory' },
    { src: 'https://res.cloudinary.com/de41faltu/image/upload/v1755658531/4_hpzmaj.jpg', alt: 'A beautiful memory', hint: 'happy memory' },
    { src: 'https://res.cloudinary.com/de41faltu/image/upload/v1755658531/3_r1zk3j.jpg', alt: 'A beautiful memory', hint: 'happy memory' },
    { src: 'https://res.cloudinary.com/de41faltu/image/upload/v1755658339/10_scju8n.jpg', alt: 'A beautiful memory', hint: 'happy memory' },
    { src: 'https://res.cloudinary.com/de41faltu/image/upload/v1755658339/3_jgfql8.jpg', alt: 'A beautiful memory', hint: 'happy memory' },
    { src: 'https://res.cloudinary.com/de41faltu/image/upload/v1755658338/8_fs14cj.jpg', alt: 'A beautiful memory', hint: 'happy memory' },
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
                    <CardContent className="flex aspect-auto items-center justify-center p-0 overflow-hidden rounded-lg">
                       <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={600}
                        height={800}
                        className="w-full h-auto object-contain"
                        data-ai-hint={photo.hint}
                        priority={index < 2}
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
      
      <div className="mt-8">
        <Button asChild>
          <Link href="https://www.youtube.com/watch?v=GBbaZ0IpQp0&ab_channel=RawayanaOfficial" target="_blank" rel="noopener noreferrer">
            <Music className="mr-2 h-4 w-4" />
            Una canción para nosotros
          </Link>
        </Button>
      </div>
    </div>
  );
}

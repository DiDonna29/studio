import { Heart } from 'lucide-react';

const Confetti = () => {
  const confettiCount = 50;
  const confetti = Array.from({ length: confettiCount });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 4}s`,
          animationDelay: `${Math.random() * 5}s`,
        };
        const size = Math.random() * 10 + 10;
        return (
          <div key={i} className="absolute animate-float" style={style}>
            <Heart className="text-primary/70" fill="hsl(var(--primary))" style={{ width: size, height: size }} />
          </div>
        );
      })}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default Confetti;

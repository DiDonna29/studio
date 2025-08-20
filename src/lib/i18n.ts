export const translations = {
  en: {
    gameTitle: "A Little Game...",
    gameDescription: "Find all the matching pairs to reveal your message!",
    gameComplete: "Perfect Match!",
    quiz: {
      title: "A Simple Quiz...",
      description: "Answer correctly to proceed to the next step!",
      complete: "You passed! Get ready...",
      questions: [
        {
          question: "What is the best place for a date?",
          answers: [
            { text: "A cozy dinner", correct: true },
            { text: "The library", correct: false },
            { text: "The gym", correct: false },
            { text: "A soccer match", correct: false },
          ],
        },
        {
          question: "What is the key to a happy relationship?",
          answers: [
            { text: "Good communication", correct: true },
            { text: "Ignoring problems", correct: false },
            { text: "Watching TV separately", correct: false },
            { text: "Never apologizing", correct: false },
          ],
        },
        {
          question: "What does 'amor' mean?",
          answers: [
            { text: "Love", correct: true },
            { text: "Friendship", correct: false },
            { text: "Food", correct: false },
            { text: "Sleep", correct: false },
          ],
        },
      ],
    },
    proposalQuestion: (name: string) => `My Dearest ${name}, will you be my girlfriend?`,
    proposalSubtitle: "This is the easiest question you'll ever have to answer.",
    yesButton: "YES! ❤️",
    noButtonTexts: [
      "No",
      "Are you sure?",
      "Really?",
      "Think again!",
      "My heart...",
      "Last chance!",
      "I'll ask again...",
      "Okay, fine...",
    ],
    celebrationTitle: "She said YES!",
    celebrationSubtitle: "A new chapter of our forever begins now. I love you.",
  },
  es: {
    gameTitle: "Un Pequeño Juego...",
    gameDescription: "¡Encuentra todos los pares para revelar tu mensaje!",
    gameComplete: "¡Pareja Perfecta!",
    quiz: {
      title: "Un Cuestionario Sencillo...",
      description: "¡Responde correctamente para pasar al siguiente paso!",
      complete: "¡Lo lograste! Prepárate...",
      questions: [
        {
          question: "¿Cuál es el mejor lugar para una cita?",
          answers: [
            { text: "Una cena acogedora", correct: true },
            { text: "La biblioteca", correct: false },
            { text: "El gimnasio", correct: false },
            { text: "Un partido de fútbol", correct: false },
          ],
        },
        {
          question: "¿Cuál es la clave para una relación feliz?",
          answers: [
            { text: "Buena comunicación", correct: true },
            { text: "Ignorar los problemas", correct: false },
            { text: "Ver la tele por separado", correct: false },
            { text: "Nunca disculparse", correct: false },
          ],
        },
        {
          question: "¿Qué significa 'amor'?",
          answers: [
            { text: "Love", correct: true },
            { text: "Amistad", correct: false },
            { text: "Comida", correct: false },
            { text: "Sueño", correct: false },
          ],
        },
      ],
    },
    proposalQuestion: (name: string) => `Mi Querida ${name}, ¿quieres ser mi novia?`,
    proposalSubtitle: "Esta es la pregunta más fácil que tendrás que responder.",
    yesButton: "¡SÍ! ❤️",
    noButtonTexts: [
      "No",
      "¿Estás segura?",
      "¿De verdad?",
      "¡Piénsalo de nuevo!",
      "Mi corazón...",
      "¡Última oportunidad!",
      "Preguntaré de nuevo...",
      "Bueno, está bien...",
    ],
    celebrationTitle: "¡Dijo que SÍ!",
    celebrationSubtitle: "Un nuevo capítulo de nuestro para siempre comienza ahora. Te amo.",
  },
};

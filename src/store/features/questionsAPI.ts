import { Question } from "./questions";

const basicQuestions = [
  {
    question: 'Пойти спать?',
    answers: [{ answer: 'Да', isCorrect: true, comment: 'Верный выбор! Существо следит' },
    { answer: 'Нет, но лечь в кровать', isCorrect: true, score: 1, comment: 'Вы не выспались! Вам сложнее думать' },
    { answer: 'Нет', isCorrect: false, comment: 'Неверно! Существо Вас убило' },]
  },
  {
    question: 'Пойти на кухню за едой?',
    answers: [{ answer: 'Да', isCorrect: true, comment: 'Верно! Вы сыты' },
    { answer: 'Нет, найти еду в комнате', isCorrect: true, score: 1, comment: 'Вы нашли печенье, но оно плохо насытило Вас' },
    { answer: 'Нет', isCorrect: false, comment: 'Неверно! Вы проголодались, и существо учуяло Вас' },]
  },
  {
    question: 'Сходить в туалет?',
    answers: [{ answer: 'Да', isCorrect: false, comment: 'Неверно! Существо Вас съело' },
    { answer: 'Нет, сходить в комнате', isCorrect: true, score: 1, comment: 'Вы выжили, но стоило ли оно того?' },
    { answer: 'Нет', isCorrect: true, comment: 'Верно! Существо Вас не увидело' },]
  },
]

// A mock function to mimic making an async request for data
export function fetchQuestions(): Promise<{ data: Question[] }> {
  return new Promise<{ data: Question[] }>((resolve) =>
    setTimeout(() => resolve({ data: basicQuestions }), 500)
  );
}

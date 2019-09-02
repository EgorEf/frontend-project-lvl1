import readlineSync from 'readline-sync';

export const getName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const helloName = () => console.log(`Hello, ${getName}`);
export const gameConditEv = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const generateNum = () => Math.floor(Math.random() * 101);
export const funcAnswer = () => readlineSync.question('Your answer: ');
export const question = number => console.log(`Question: ${number}`);
export const logic = (counter) => {
  const number = generateNum();
  question(number);
  const answer = funcAnswer();
  if (counter === 1) return console.log(`Congratulations, ${getName}`);
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  if (correctAnswer === answer) {
    console.log('Correct!');
    return logic(counter - 1);
  } return console.log(`"${answer}" is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${getName}!`);
};

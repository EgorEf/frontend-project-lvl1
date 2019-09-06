import readlineSync from 'readline-sync';

export default (getCondition, getCorrectAnswer, getDataForQuestion, toNextStep) => {
  const makeQuestion = ForQuestion => console.log(`Question: ${ForQuestion}`);
  const getAnswer = () => readlineSync.question('Your answer: ');
  const greeting = () => console.log('Welcome to the Brain Games!');
  const getName = () => readlineSync.question('May I have your name? ');
  const helloName = name => console.log(`Hello, ${name}`);
  const logic = (CorrectAnswer, DataForQuestion, name, nextStep) => {
    for (let counter = 3; counter > 0; counter -= 1) {
      const step = nextStep();
      makeQuestion(DataForQuestion(step));
      const correctAnswer = CorrectAnswer(step);
      const answer = getAnswer();
      if (correctAnswer === answer) {
        console.log('Correct!');
      } else return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    }
    return console.log(`Congratulations, ${name}`);
  };
  const gameStart = () => {
    greeting();
    console.log(getCondition);
    const name = getName();
    helloName(name);
    logic(getCorrectAnswer, getDataForQuestion, name, toNextStep);
  };
  gameStart();
};

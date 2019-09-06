import {
  cons, car, cdr,
} from '@hexlet/pairs';
import core from '..';

export default () => {
  const conditionForCa = 'What is the result of the expression?';
  const generateSometh = selections => Math.floor(Math.random() * selections);
  const generateNum = () => {
    const selectionsOfNum = 25;
    return Math.floor(Math.random() * selectionsOfNum);
  };
  const nextRound = () => {
    const makeSymbol = () => {
      const str = '*+-';
      const selectionsOfSymb = 3;
      const getSymb = () => str[generateSometh(selectionsOfSymb)];
      return getSymb(str);
    };
    const symbol = makeSymbol();
    const num1 = generateNum();
    const num2 = generateNum();
    const expressionToStr = () => String(`${num1} ${symbol} ${num2}`);
    const getCorrectAnswer = () => {
      switch (symbol) {
        case '+':
          return String(num1 + num2);
        case '-':
          return String(num1 - num2);
        case '*':
          return String(num1 * num2);
        default:
          return null;
      }
    };
    const forQuestion = expressionToStr();
    const correctAnswer = getCorrectAnswer();
    return cons(forQuestion, correctAnswer);
  };
  const question = pair => car(pair);
  const correctAnswer = pair => cdr(pair);
  return core(conditionForCa, correctAnswer, question, nextRound);
};

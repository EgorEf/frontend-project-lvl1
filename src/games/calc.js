import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

export default () => {
  const condition = 'What is the result of the expression?';
  const generateSymbol = () => {
    const str = '*+-';
    const minVal = 0;
    const maxVal = 3;
    const getSymb = str[generateNum(minVal, maxVal)];
    return getSymb;
  };
  const generateData = () => {
    const min = 0;
    const max = 50;
    const symbol = generateSymbol();
    const num1 = generateNum(min, max);
    const num2 = generateNum(min, max);
    const question = String(`${num1} ${symbol} ${num2}`);
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
    const answer = getCorrectAnswer();
    return cons(question, answer);
  };
  return core(condition, generateData);
};

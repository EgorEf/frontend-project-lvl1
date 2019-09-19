import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

const condition = 'What is the result of the expression?';
const listSymbol = '*+-';
const minValue = 0;
const maxValue = 3;
const generateSymbol = (minNum, maxNum, symbols) => symbols[generateNum(minNum, maxNum)];
const min = 0;
const max = 50;
const getCorrectAnswer = (number1, number2, symbols) => {
  switch (symbols) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      return null;
  }
};
export default () => {
  const generateData = () => {
    const symbol = generateSymbol(minValue, maxValue, listSymbol);
    const num1 = generateNum(min, max);
    const num2 = generateNum(min, max);
    const question = String(`${num1} ${symbol} ${num2}`);
    const answer = getCorrectAnswer(num1, num2, symbol);
    return cons(question, answer);
  };
  return core(condition, generateData);
};

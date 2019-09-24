import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

const condition = 'What is the result of the expression?';
const mathOperators = '*+-';
const lengthList = mathOperators.length;
const getOperator = operators => operators[generateNum(0, lengthList)];
const min = 0;
const max = 50;
const getCorrectAnswer = (number1, number2, operator) => {
  switch (operator) {
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
const generateData = () => {
  const operator = getOperator(mathOperators);
  const num1 = generateNum(min, max);
  const num2 = generateNum(min, max);
  const question = `${num1} ${operator} ${num2}`;
  const answer = getCorrectAnswer(num1, num2, operator);
  return cons(question, answer);
};
export default () => core(condition, generateData);

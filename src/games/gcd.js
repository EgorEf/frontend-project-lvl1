import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

const condition = 'Find the greatest common divisor of given numbers.';
const getGcd = (smallNum, bigNum) => {
  let gcd = smallNum;
  for (let counter = gcd; counter > 0; counter -= 1) {
    if (bigNum % counter === 0 && smallNum % counter === 0) {
      gcd = counter;
      break;
    }
  }
  return String(gcd);
};
const min = 0;
const max = 101;
export default () => {
  const generateData = () => {
    const num1 = generateNum(min, max);
    const num2 = generateNum(min, max);
    const biggestNum = (num1 >= num2) ? num1 : num2;
    const smallestNum = (num1 >= num2) ? num2 : num1;
    const question = String(`${num1} ${num2}`);
    const answer = getGcd(smallestNum, biggestNum);
    return cons(question, answer);
  };
  return core(condition, generateData);
};

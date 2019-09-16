import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

export default () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  const generateData = () => {
    const min = 0;
    const max = 101;
    const num1 = generateNum(min, max);
    const num2 = generateNum(min, max);
    const biggestNum = (num1 >= num2) ? num1 : num2;
    const smallestNum = (num1 >= num2) ? num2 : num1;
    const question = String(`${num1} ${num2}`);
    const getGCD = () => {
      let gcd = smallestNum;
      for (let counter = gcd; counter > 0; counter -= 1) {
        if (biggestNum % counter === 0 && smallestNum % counter === 0) {
          gcd = counter;
          break;
        }
      }
      return String(gcd);
    };
    const answer = getGCD();
    return cons(question, answer);
  };
  return core(condition, generateData);
};

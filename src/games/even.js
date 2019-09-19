import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const getAnswer = (someQuestion) => {
  const answer = (someQuestion % 2 === 0) ? 'yes' : 'no';
  return answer;
};
const min = 0;
const max = 50;
export default () => {
  const generateData = () => {
    const question = generateNum(min, max);
    const answer = getAnswer(question);
    return cons(question, answer);
  };
  return core(condition, generateData);
};

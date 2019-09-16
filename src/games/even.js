import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

export default () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateData = () => {
    const min = 0;
    const max = 50;
    const question = generateNum(min, max);
    const getAnswer = () => {
      const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
      return correctAnswer;
    };
    const answer = getAnswer();
    return cons(question, answer);
  };
  return core(condition, generateData);
};

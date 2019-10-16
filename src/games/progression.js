import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;
const getQuestion = (firstElement, diff, secretElementIndex, length) => {
  let question = '';
  const secretPlace = '..';
  for (let i = 0; i < length; i += 1) {
    const step = (secretElementIndex === i) ? secretPlace : firstElement + diff * i;
    question = `${question} ${step}`;
  }
  return question.trimLeft();
};
const generateData = () => {
  const firstElement = generateNum(0, 50);
  const diff = generateNum(1, 7);
  const secretElementIndex = generateNum(0, progressionLength - 1);
  const question = getQuestion(firstElement, diff, secretElementIndex, progressionLength);
  const answer = String(firstElement + diff * (secretElementIndex));
  return cons(question, answer);
};
export default () => core(condition, generateData);

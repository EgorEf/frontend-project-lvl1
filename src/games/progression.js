import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;
const getQuestion = (startNum, diff, secretElementIndex, length) => {
  let question = '';
  const secretPlace = '..';
  for (let counter = 1; counter <= length; counter += 1) {
    const step = (secretElementIndex === counter) ? secretPlace : startNum + diff * counter;
    question = `${question} ${step}`;
  }
  return question;
};
const generateData = () => {
  const startNum = generateNum(0, 50);
  const diff = generateNum(1, 7);
  const secretElementIndex = generateNum(1, progressionLength);
  const question = getQuestion(startNum, diff, secretElementIndex, progressionLength);
  const answer = String(startNum + diff * (secretElementIndex));
  return cons(question, answer);
};
export default () => core(condition, generateData);

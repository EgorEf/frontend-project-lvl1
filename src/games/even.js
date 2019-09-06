import {
  cons, car, cdr,
} from '@hexlet/pairs';
import core from '..';

export default () => {
  const conditionForEv = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateNum = () => {
    const selectionsOfNum = 51;
    return Math.floor(Math.random() * selectionsOfNum);
  };
  const nextRound = () => {
    const dataForQuestion = generateNum();
    const correctAnswerEv = (dataForQuestion % 2 === 0) ? 'yes' : 'no';
    return cons(dataForQuestion, correctAnswerEv);
  };
  const getQuestion = pair => car(pair);
  const getCorrect = pair => cdr(pair);
  return core(conditionForEv, getCorrect, getQuestion, nextRound);
};

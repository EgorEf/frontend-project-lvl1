import {
  cons, car, cdr,
} from '@hexlet/pairs';
import core from '..';

export default () => {
  const conditionForProg = 'What number is missing in the progression?';
  const generateStep = () => {
    const selectOfLengtStep = 6;
    const generateNum = Math.floor(Math.random() * selectOfLengtStep);
    if (generateNum === 0) return generateStep();
    return generateNum;
  };
  const generateBeginNum = () => {
    const selectionsOfNum = 51;
    return Math.floor(Math.random() * selectionsOfNum);
  };
  const generateSecretQuest = () => {
    const selectOfLengtStep = 10;
    const generateNum = Math.floor(Math.random() * selectOfLengtStep);
    if (generateNum === 0) return generateSecretQuest();
    return generateNum;
  };
  const nextRound = () => {
    const positionSecretQuestion = generateSecretQuest();
    const lengthStep = generateStep();
    const beginNum = generateBeginNum();
    const progressionLength = 10;
    const expressionToStr = () => {
      let progression = beginNum;
      let result = '';
      const secret = '..';
      for (let counter = 1; counter <= progressionLength; counter += 1) {
        const step = (positionSecretQuestion === counter) ? secret : progression;
        progression += lengthStep;
        result += `${step} `;
      }
      return String(`${result}`);
    };
    const getCorrectAnswer = () => {
      const valueSecretNum = beginNum + lengthStep * (positionSecretQuestion - 1);
      return String(valueSecretNum);
    };
    const forQuestion = expressionToStr();
    const correctAnswer = getCorrectAnswer();
    return cons(forQuestion, correctAnswer);
  };
  const question = pair => car(pair);
  const correctAnswer = pair => cdr(pair);
  return core(conditionForProg, correctAnswer, question, nextRound);
};

import _ from 'lodash';

class Quiz {
  constructor({question, correctAnswer, incorrectAnswers}) {
    this._question = question;
    this._correctAnswer = correctAnswer;
    this._incorrectAnswer = [...incorrectAnswers];
  }

  get question() {
    return this._question;
  }

  get correctAnswer() {
    return this._correctAnswer;
  }

  shuffleAnswers() {
    return _.shuffle([
      this._correctAnswer,
      ...this._incorrectAnswer
    ]);
  }
}

export default Quiz;
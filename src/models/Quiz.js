class Quiz {
  constructor({question, correctAnswer, incorrectAnswers}) {
    
    this._question = question;
    this._correctAnswer = correctAnswer;
    this._incorrectAnswer = [...incorrectAnswers];
  }
}

export default Quiz;
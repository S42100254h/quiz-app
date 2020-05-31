import React from 'react';
import QuizModel from '../../models/Quiz';
import Button from '../Button/Button';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizzes: [],
      currentIndex: 0,
      numberOfCorrects: 0
    };
  }

  async componentDidMount() {
    await this.restart();
  }

  async restart() {
    this.setState({
      quizzes: [],
      currentIndex: 0,
      numberOfCorrects: 0
    });

  const quizzes = await QuizModel.fetchAndCreateQuizzes();

  this.setState({ quizzes });
}

selectAnswer(quiz, answer) {
  let { currentIndex, numberOfCorrects } = this.state;
  const isCorrect = quiz.judgeCorrectAnswer(answer);

  if (isCorrect) {
    numberOfCorrects++;
    alert('Correct answer!!');
  } else {
    alert(`Wrong answer... (The correct answer is "${quiz.correctAnswer}")`);
  }
  currentIndex++;

  this.setState({
    currentIndex,
    numberOfCorrects
  });
}

  render() {
    const { quizzes, currentIndex } = this.state;

    // 読み込み中
    if (quizzes.length === 0) {
      return this.renderLoading();
    }

    // クイズ中
    if (quizzes.length > 0 && currentIndex < quizzes.length) {
      return this.renderQuiz();
    }

    return (
      <h1>Quiz</h1>
    );
  }

  renderLoading() {
    return (
      <div>
        <h1>クイズページ</h1>
        <p>Now loading...</p>
        <hr/>
        {/* <Link to="/">トップページへ</Link> */}
      </div>
    );
  }

  renderQuiz() {
    const { currentIndex, quizzes } = this.state;

    const quiz = quizzes[currentIndex];
    const answers = quiz.shuffleAnswers().map((answer, indes) => {
      return (
        <li key={ indes }>
          <Button
            onClickHandler={() => { this.selectAnswer(quiz, answer) }}
          >
            {answer}
          </Button>
        </li>
      );
    });

    return (
      <div>
        <h1>クイズのページ</h1>
        <div>
          <p>{quiz.question}</p>
          <ul className="QuizList">{answers}</ul>
        </div>
        {/* <Link to="/">トップページへ</Link> */}
      </div>
    );
  }
}

export default Quiz;

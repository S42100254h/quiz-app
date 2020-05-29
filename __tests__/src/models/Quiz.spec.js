import Quiz from '../../../src/models/Quiz';

const createMockQuiz = () => {
  return {
    question: 'クイズの問題',
    correctAnswer: '答え',
    incorrectAnswers: [
      '不正解１',
      '不正解２',
      '不正解３'
    ],
  }
}

describe ('クイズクラスのテスト', () => {
  it('インポートチェック', () => {
    expect( typeof Quiz).toStrictEqual('function');
  });
});

describe('インスタンスメソッド', () => {
  describe('constructor', () => {
    it('コンストラクタで渡した値をプロパティに保持する', () => {
      const quizData = createMockQuiz();
      const quiz = new Quiz(quizData);

      expect( quiz._question ).toStrictEqual(quizData.question);
      expect( quiz._correctAnswer ).toStrictEqual(quizData.correctAnswer);
      expect( quiz._incorrectAnswers ).toStrictEqual(quizData._incorrectAnswers)
    });
  });
});

// describe('Shuffleメソッド', () => {
//   it('シャッフルされる', () => {
//     const quizData =createModkQuiz();
//     const quiz = new Quiz(quizData);

//     const shuffledAnswers1 = quiz.shuffleAnswers();
//     const shuffledAnswers2 = quiz.shuffleAnswers();
//     expect(shuffledAnswers1).not.toStrictEqual(shuffledAnswers2);
//   });
// });

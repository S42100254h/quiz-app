import QuizFetcher from '../../../src/data_fetchers/QuizFetcher';

describe ('QuizFetcherのテスト', () => {
  it('クラスチェック', () => {
    console.log('typeof QuizFetcher');
    expect( typeof QuizFetcher).toStrictEqual('function');
  });
})
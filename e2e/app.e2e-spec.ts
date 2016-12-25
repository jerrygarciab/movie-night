import { MovieNightPage } from './app.po';

describe('movie-night App', function() {
  let page: MovieNightPage;

  beforeEach(() => {
    page = new MovieNightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

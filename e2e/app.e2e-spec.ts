import { GitPage } from './app.po';

describe('git App', function() {
  let page: GitPage;

  beforeEach(() => {
    page = new GitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

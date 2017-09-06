import { FODOPage } from './app.po';

describe('fodo App', () => {
  let page: FODOPage;

  beforeEach(() => {
    page = new FODOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { CodeOnDemandPage } from './app.po';

describe('code-on-demand App', () => {
  let page: CodeOnDemandPage;

  beforeEach(() => {
    page = new CodeOnDemandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

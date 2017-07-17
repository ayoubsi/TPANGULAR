import { AngularTpMarvelPage } from './app.po';

describe('angular-tp-marvel App', () => {
  let page: AngularTpMarvelPage;

  beforeEach(() => {
    page = new AngularTpMarvelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { RealEstateQPage } from './app.po';

describe('real-estate-q App', function() {
  let page: RealEstateQPage;

  beforeEach(() => {
    page = new RealEstateQPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

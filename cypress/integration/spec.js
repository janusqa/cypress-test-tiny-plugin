describe('page', () => {
  it('does not work', () => {
    cy.visit('https://google.com', {
      onLoad: () => console.log('*** PAGE IS LOADED ***')
    });
    console.log('Should be printed AFTER *** PAGE LOADED ***');
  });
});

describe('Galeria slajdów', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('pozwala użytkownikowi przewijać slajdy przyciskami', () => {
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('exist');

    cy.get('.swiper-button-prev').click();
    cy.get('.swiper-slide-active').should('exist');
  });

  it('sprawdza, czy zawartość slajdu jest widoczna', () => {
    cy.get('.swiper-slide-active .card-contents').should('exist').and('be.visible');
    cy.get('.swiper-slide-active img').should('be.visible');
    cy.get('.swiper-slide-active .card-description').should('exist');
  });

  it('galeria jest poprawnie wyświetlana', () => {
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-slide').should('have.length.at.least', 1);
    cy.get('.swiper-button-next').should('be.visible').and('not.be.disabled');
    cy.get('.swiper-button-prev').should('be.visible').and('not.be.disabled');
  });
});

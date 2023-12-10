const desc = "Armenia is a mountainous nation in West Asia, a former Soviet Republic, and was one of the first Christian nations, embracing Christianity in the fourth century. This rich cultural and natural environment makes it an exciting destination for a wide range of adventure, activity, and walking holidays. <br /> <br /> There are many pagan sites to visit as well as UNESCO World Heritage - listed churches, which are–almost without exception–built in stunning locations.Surrounded by forests, perched on the top of dramatic gorges or silhouetted before snow - capped mountains, they draw us to magnificent open spaces filled with a huge variety of trees and wild flowers.On Armenia tours we see wonderful mountains, lakes, and waterfalls in the countryside–and relish cooling breezes– while the cafés and restaurants of the country’ s capital, Yerevan, are proof of an emerging economy. Mount Ararat towers majestically over the city, and beautiful scenery is plentiful.";

describe('Read More/Read Less', () => {
  it('should toggle text visibility', () => {
    // Visit the HTML file
    cy.visit('index.html'); // Replace "your-port" with the actual port where your application is running

    // Check if the button is initially visible in mobile screens
    cy.viewport('iphone-8'); // Set the viewport to a mobile screen size
    cy.get('.description>button').should('be.visible');

    // Check if the button text is more in initial state
    cy.get('.description>button>span').should('have.text', 'Show More')

    // Click the Read More button
    cy.get('.description>button').click();

    // Check if the full description and correct state is displayed after clicking
    // cy.get('.description>p').should('have.text', desc);
    // cy.get('.description>button>span').should('have.text', 'Show Less');

    // Click the Read Less button
    cy.get('.description>button').click();

    // Check if the truncated description is displayed after clicking again
    cy.get('.description>p').should('have.text', 'Armenia is a mountainous nation in West Asia, a former Soviet Republic, and was one of the first Christian nations, embracing Christianity in the fourth century. This rich cultural and natural environm...');

  });
});


Cypress.Commands.add("modelPopUp", (headerMessage, bodyMessage) => {
  cy.get('[data-test="modal-header"]').find('h4').invoke('text').should('eq',headerMessage);
  cy.get('[data-test="modal-body"]').invoke('text').should('eq',bodyMessage);
})

Cypress.Commands.add("closeModelPopUp", () => {
  cy.get('[data-test="modal-footer"]').find('button').click({force:true});

})

Cypress.Commands.add("clickOnAddAsset", () => {
  cy.get('a[testid="add-asset"]').should('be.visible').click({ force: true });

})

Cypress.Commands.add("selectEntriesToView", (showEntries) => {
  cy.get('[data-test="datatable-select"]').should('be.visible').find('select').select(showEntries);
})

Cypress.Commands.add("enterAsset", (assetText) => {
  cy.get('input[testid="asset-name"]').should('be.visible').clear().focus().type(assetText);
})

Cypress.Commands.add("saveAsset", (assetText) => {
  cy.get('button[data-test="button"]').should('be.visible').click({force:true});
})
Cypress.Commands.add("clickOnExistingAsset", (assetText) => {
  cy.get('a[testid="add-asset"]').should('be.visible').next().click({ force: true });
})
Cypress.Commands.add("searchInExistingAsset", (assetText) => {
  cy.get('div[data-test="datatable-input"]').find('input').click({force:true}).type(assetText);
})
Cypress.Commands.add("checkAssertInTableData", (assetText) => {
  cy.get('[data-test="datatable"]').should('be.visible');
  cy.get('[data-test="table-body"]')
    .should('be.visible')
    .find('tr')
    .find('td')
    .contains(assetText);
})




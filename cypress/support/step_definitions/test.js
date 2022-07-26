import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import { modelPopup } from '../../constants/messageValidation';
const uuid = () => Cypress._.random(0, 1e10)
const id = uuid()
const testName = `TEST${id}`

Given ('I visit technical assignment website',()=>{
  cy.visit('/')
});
When ('I click on the add asset tab',()=>{
  cy.clickOnAddAsset();
});
And ('I enter asset number in the text box with specific format',()=>{
  cy.enterAsset(testName);
});
When ('I click on send button',()=>{
  cy.saveAsset();

});
Then ('I see pop up stating its successfully saved',()=>{
  cy.modelPopUp(modelPopup.headerMessageForSuccess,modelPopup.bodyMessageForSuccess+testName+modelPopup.bodyMessageForSuccessTwo);

});
And ('I click close button in the pop up',()=>{
  cy.closeModelPopUp();
});
// search asset in existing Asset
When ('I click on the existing asset tab',()=>{
  cy.clickOnExistingAsset();
})
Then ('I click on the search box and enter previously saved asset name',()=>{
  cy.searchInExistingAsset(testName);
})
And ('I check that the asset searched is available',()=>{
  cy.checkAssertInTableData(testName);
})

And ('I enter Invalid asset number in the text box',()=>{
  cy.enterAsset('et3456789786TE');
})
Then ('I see html error stating invalid format',()=>{
  cy.get('input[testid="asset-name"]:invalid').invoke('prop', 'validationMessage')
    .should('equal', 'Please match the format requested.');
})

When ('I enter exiting asset number in the text box with specific format',()=>{
  cy.enterAsset(testName);
})
And ('I see pop up popup show up stating existing asset',()=>{
  cy.modelPopUp(modelPopup.headerMessageForAlreadyExisting,modelPopup.bodyMessageForAlreadyExisting);
})

When ('I enter asset number starting with Z in the text box with specific format',()=>{
  const testname = `ZEST${id}`;
  cy.enterAsset(testname);
})
Then ('I click on the Name of the table header in the page',()=>{
  cy.get('[data-test="datatable-head"]')
    .should('be.visible')
    .find('tr')
    .find('th')
    .dblclick({force:true});

})
And  ('I check in the table asset appear at top',()=>{
    cy.get('[data-test="table-body"]')
      .should('be.visible')
      .find('tr')
      .find('td')
      .eq(0)
      .should('contain.text','ZEST');
})

When ('I select no of {string} in the show entries',(entries)=>{
  cy.selectEntriesToView(entries);
})
Then ('I check whether count of  {string} are visible in the table',(entries)=>{
    cy.get('div[data-test="table"]').should('be.visible').find('table').find('tbody').find('tr').find('td').should('have.length',entries);
})



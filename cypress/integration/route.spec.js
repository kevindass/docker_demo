describe('Route Testing in UI5', function() {

    it('should load the app', function() {
        cy.server()
        cy.route('GET','https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/master-detail/webapp/localService/mockdata/Objects.json').as('metadata')
        //change according to your webserver
        cy.visit('https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/master-detail/webapp/test/mockServer.html') 
        cy.wait('@metadata')

        //change text inside of contains relevant to some text seen in your applcation.
        cy.contains('<Objects>').should('be.visible') 
    });
    it('should display the details screen', function(){
        cy.server()
        cy.route('GET','https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/master-detail/webapp/localService/mockdata/Objects.json').as('metadata')
        //change according to your webserver
        cy.visit('https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/master-detail/webapp/test/mockServer.html') 
        cy.wait('@metadata')


        cy.contains('Object 11').click();
        //cy.url().should('include', 'Objects/ObjectID_11')
    });
    it('should validate line item counts', function(){
        cy.server()
        cy.route('GET','https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/master-detail/webapp/localService/mockdata/LineItems.json').as('metadata')
        //change according to your webserver
        cy.visit('https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/master-detail/webapp/test/mockServer.html') 
        cy.wait('@metadata')

        //cy.get('lineItemsTitle')
        //cy.get('#container-masterdetail---detail--lineItemsTitle')
        //cy.get('container-masterdetail---detail--lineItemsTitle')
    })
})

describe('Classes routes testing', () => {
    

    it('should return status 200 when calling to show all items', () => {
        cy.request('/classes').as('classesReq')
        cy.get('@classesReq').then(classes => {
            expect(classes.status).to.eq(200)
        })
    })
})
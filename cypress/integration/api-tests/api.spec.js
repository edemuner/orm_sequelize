const NEWCLASS = {start_date: "2022-04-01", professor_id: 1,level_id: 1}

describe('Classes routes testing', () => {
    

    it('/classes should return an array and status 200', () => {
        cy.request('/classes').should(classes => {
            expect(classes.status).to.eq(200)
            assert.isArray(classes.body)
        })
    })

    it('/classes with post', () => {
        cy.request({
            method:'POST',
            url:'/classes',
            body:NEWCLASS
        })
        .should(res => { 
            expect(res.status).to.eq(200)
            expect(res.body).to.have.all.keys('id', 'start_date', 'professor_id', 'level_id', 'updatedAt', 'createdAt')
            expect(res.body.professor_id).to.eq(NEWCLASS.professor_id)
            expect(res.body.level_id).to.eq(NEWCLASS.level_id)
            expect(res.body.start_date).to.eq(NEWCLASS.start_date)

        } )
    })
})
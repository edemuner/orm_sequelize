
const NEWCLASS = {start_date: "2022-04-01", professor_id: 1,level_id: 1}
const UPDATECLASS = {professor_id:2, level_id:2}

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

    it('get /classes/:id should return correctly', () => {
        cy.request({
            method:'POST',
            url:'/classes',
            body:NEWCLASS
        }).then(res => {
            const id = res.body.id
            cy.request({
                method:'GET',
                url:`/classes/${id}`
            }).should(res => {
                assert.isArray(res.body)
                expect(res.status).to.eq(200)
                expect(res.body[0]).to.have.all.keys('id', 'start_date', 'updatedAt', 'createdAt', 'deletedAt', 'professor_id', 'level_id')
                expect(res.body[0].id).to.eq(id)
            }                
            )
        })
    })

    it('put /classes/:id should return correctly', () => {
        cy.request({
            method:'POST',
            url:'/classes',
            body:NEWCLASS
        }).then(res => {
            const id = res.body.id
            cy.request({
                method:'PUT',
                url: `/classes/${id}`,
                body:UPDATECLASS
            }).should(res => {
                expect(res.status).to.eq(200)
                expect(res.body[0]).to.have.all.keys('id', 'start_date', 'updatedAt', 'createdAt', 'deletedAt', 'professor_id', 'level_id')
                expect(res.body[0].professor_id).to.eq(UPDATECLASS.professor_id)
                expect(res.body[0].level_id).to.eq(UPDATECLASS.level_id)
            })
        })
    })

    it('delete /classes/:id should return correctly', () => {
        cy.request({
            method:'POST',
            url:'/classes',
            body:NEWCLASS
        }).as('postReq')
        cy.get('@postReq').then(res => {
            const id = res.body.id
            cy.request({
                method:'DELETE',
                url: `/classes/${id}`,
            }).should(res => {
                expect(res.status).to.eq(200)
                expect(res.body.message).to.eq(`id ${id} was deleted`)
                cy.request({
                    method:'GET',
                    url:`/classes/${id}`
                }).then(res => {
                    expect(res.body.deletedAt).to.not.eq(null)
                })
            })
        })
    })


})
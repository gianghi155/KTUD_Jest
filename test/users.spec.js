// const assert = require('assert')
const { findUserByEmail, findUserById } = require('../users.js')
describe('The findUserByEmail function', () => {
    it('finds a user by email', done => {
        findUserByEmail('bahdcoder@gmail.com').then(response => {
            expect(response.message).toEqual('User found successfully.')
            // assert.equal(response.message, 'User found successfully.')
            done()
        })
    })
    it('finds a user by email (Using the return promise method)', () => {
        return findUserByEmail('bahdcoder@gmail.com').then(response => {
            expect(response.message).toEqual('User found successfully.')
        })
    })

    it('find a user by email (Using async/await)', async () => {
        const response = await findUserByEmail('bahdcoder@gmail.com')
        expect(response.message).toEqual('User found successfully.')
    })
    it('find a user by email (Using async/await)', async () => {
        const response = await findUserByEmail('bahdcoder@gmail.com')
        expect(response.message).toEqual('User found successfully.')
    })
})
describe('The findUserById function', () => {
    it('finds a user by id', done => {
        findUserById(1).then(response => {
            expect(response.message).toEqual('User found successfully.')
            done()
        })
    })
    it('finds a user by id (Using the return promise method)', () => {
        return findUserById(1).then(response => {
            expect(response.message).toEqual('User found successfully.')
        })
    })

    it('find a user by id (Using async/await)', async () => {
        const response = await findUserById(1)
        expect(response.message).toEqual('User found successfully.')
    })
    // it('find a user by id (Using async/await)', async () => {
    //     const response = await findUserById(1)
    //     assert.equal(response.message, 'User found successfully.')
    // })
    // number 6
    it('rejects with error if user with email was not found.',()=>{
        // return findUserByEmail('x@y.com').then(()=>{
        //     assert.fail('Expected findUserByEmail function to reject.')
        // },error =>{
        //     assert.equal(error.message, 'User with email: x@y.com was not found')
        // })
        const actual =findUserByEmail('x@y.com')
        expect(actual).rejects.toEqual(new Error('User with email: x@y.com was not found'))
    })
})
describe('The findUserById function',()=>{
    it('should find a user by id',async()=>{
        const response=await findUserById(1)
        expect(response.message).toEqual('User found successfully.')
    })
    it('should reject if user is not found by id',()=>{
        // return findUserById(90).then(()=>{
        //     assert.fail('Expected findUserByEmail function to throw.')
        // },error =>{
        //     assert.equal(error.message, 'User with id: 90 was not found.')
        // })
        const actual =findUserById(90)
        expect(actual).rejects.toEqual(new Error('User with id: 90 was not found.'))
    })
})

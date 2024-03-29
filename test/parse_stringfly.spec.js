const {parse,stringfy}=require('../parse_stringfy.js')
// const assert=require('assert')
describe('Kiem tra hàm stringfy',()=>{
    it('chuyen doi thanh mot chu',()=>{
        const actual=stringfy({by:'kati-frantz'})
        const expected='by=kati-frantz'
        expect(actual).toBe(expected)
    })
})
describe('Kiem tra hàm parse',()=>{
    it('chuyendoi trong mot Object',()=>{
        const actual=parse('?by=kati-frantz')
        const expected={by:'kati-frantz'}
        expect(actual).toEqual(expected)
    })
})
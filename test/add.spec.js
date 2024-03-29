const tong=require('../add')
// var assert=require('assert')
// nhiểu etst case nhhu7 vậy bị rối hông -->dùng describe đi
describe('tinhtong',()=>{
    it('tong 1+2=3',()=>{
        var kq=tong(1,2)
        var mongdoi=3
        expect(kq).toBe(mongdoi)
    })
    it('tong 2+2=4',()=>{
        var kq=tong(2,2)
        var mongdoi=4
        expect(kq).toBe(mongdoi)
    })
})

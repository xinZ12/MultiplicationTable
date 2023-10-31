import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {

  it('should return null when the start less than 1', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 14

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBeNull()
  })

  it('should return null when the start greater than end', () => {
    // given
    const table = new MultiplicationTable()
    const start = 100
    const end = 14

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBeNull()
  })

  it('should return null when the end greater than 1000', () => {
    // given
    const table = new MultiplicationTable()
    const start = 100
    const end = 1409

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBeNull()
  })


  it('should return multiplication table of (2,4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBe(`2*2=4
2*3=6 3*3=9
2*4=8 3*4=12 4*4=16`)
  })




})

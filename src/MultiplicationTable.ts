export type Multiplication = [number, number, number]


export class MultiplicationTable {
  public renderMultiplicationTable(start: number, end: number): string|null{
    if(!isValid(start, end)){
      return null
    }

    const table: Multiplication[][] = generateMultiplicationTable(start, end)

    const tableString: string = render(table)

    return tableString

  }
}

function isValid(start: number, end: number): boolean{
  return ((Number.isInteger(start))&&(Number.isInteger(end))&&(end >= start)&&(start <= 1000)&&(end <= 1000)&&(start >= 1)&&(end >= 1))
}

//生成行
function generateMultiplicationTable(start: number, end: number): Multiplication[][]{
  const res: Multiplication[][] = []

  for(let j = start; j <= end; j++){
    res.push(generateRowMultiplicationTable(start, j))
  }

  return res
}

//每一行
function generateRowMultiplicationTable(start: number, row: number): Multiplication[]{
  //let i: any
  const res: Multiplication[] = []
  for(let i = start; i <= row; i++){
    res.push(generateOneMultiplication(i, row))
  }
  return res
}


function generateOneMultiplication(num1: number, num2: number): Multiplication{
  const multiple = num1 * num2
  return [num1, num2, multiple]
}


function render(table: Multiplication[][]): string{
  /*
  let res = ''
  for(let i = 0; i < table.length; i++){
    for(let j = 0; j < table[i].length; j++){
      res += table[i][j][0].toString() + "*" + table[i][j][1].toString() + "=" + table[i][j][2].toString()+" "
    }
    res+="\n"
  }
  return res
  */

  return table.map(line=>
    line.map(item=>`${item[0]}*${item[1]}=${item[2]}`).join(' ')).join('\n')
}


/*
const table = new MultiplicationTable()
const start = 2
const end = 6

const rendered = table.renderMultiplicationTable(start, end)
console.log(rendered)
*/

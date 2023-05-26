const leoName = 'Leo';
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance)
const leo = `${leoName} ${leoSurname} (Owed: R ${Math.abs(parseFloat(leoBalance)).toFixed(2)})`
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${Math.abs(parseFloat(sarahBalance)).toFixed(2)})`
const total = "Total amount owed: "
const formattedOwed = `R ${Math.abs(owed).toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
const result = `\n${leo}\n${sarah}\n\n${divider}\n\n  ${total}${formattedOwed}\n\n${divider}`

console.log(result)

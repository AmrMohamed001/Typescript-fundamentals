/////////////////////////////////////////////////////////
// => type annotation is that we developers who specify the type of variables (the type of the value assigned to variable
// => type inference is that ts itself can predict the type assigned to variable
// it only work while declaring and initializing at the same time
// const x = 10 (Number) 🫸
//Always refer inference
/////////////////////////////////////////////////////////
// variables
const x: number = 10
const s: String = 'as'
const flag: Boolean = false
const empty: null = null
// arrays
const arr1: Number[] = [1, 2, 3, 4]
const arra: String[] = ['x', 'y']
const arr: Boolean[] = [true, true, false]

// classes
class Colour {}

const red: Colour = new Colour()

// Litteral objects
interface test {
	x: Number
	y: String
}

const obj: { x: Number; y: String } = {
	x: 20,
	y: 'as',
}

// functions
const loggingNumber: (i: Number) => void = (i: Number) => {
	console.log(i)
}
loggingNumber(10)

// when to use type annotation over type inference
/*****************************************/
//1- when a function return (any) type
// (any)=> when the function can't know what specific type it will return as it depend on the input
const json = '{"x":10,"y":20}'
//const coordenates = JSON.parse(json)  => it will be in type any
// to solve it
const coordenates: { x: Number; y: Number } = JSON.parse(json)

// 2- when we declare variable and init it later
let foundWord: Boolean
const color = ['red', 'green', 'blue']
for (let i = 0; i < color.length; i++) {
	if (color[i] === 'green') foundWord = true
}

//3- variable it's type can't be inferred correctly
let numbers = [-12, -10, 15]
let numberAboveZero: Boolean | Number = false
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) numberAboveZero = numbers[i]
}

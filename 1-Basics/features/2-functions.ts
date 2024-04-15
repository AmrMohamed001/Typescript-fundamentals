// type annotations and type inference with functions
const add = (a: number, b: number): number => {
	return a + b
}
// functions have two parts that must be specified:
//  1- the type of parameters => type annotation
//  2- the returned type => type inference (Bad practice) Donot Use It !!!
//**************we musn't use type inference in returned value*******************
// for ex:
const sub = (a: number, b: number) => {
	a - b
}
// ts inference will predict that return type is void but the correct return type is number
const subSolve = (a: number, b: number): number => {
	return a - b
}

//Function Declaration
function multiply(a: number, b: number): number {
	return a * b
}

//Function Expression(anonymous)
const devide = function (a: number, b: number): Number {
	return a / b
}

const logger = (message: string): void => {
	console.log(message)
}

const weatherToday = {
	date: new Date(),
	forcast: 'sunny',
}
const loggerWeather = (weatherToday: { date: Date; forcast: string }): void => {
	console.log(weatherToday.date)
	console.log(weatherToday.forcast)
}
// with Destructuring
const loggerWeatherV2 = ({
	date,
	forcast,
}: {
	date: Date
	forcast: string
}): void => {
	console.log(date)
	console.log(forcast)
}
loggerWeather(weatherToday)

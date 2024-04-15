//todo : Generics around Classes
class GetNumber {
	constructor(public arr: number[]) {}
	get(index: number): number {
		return this.arr[index];
	}
}

class GetString {
	constructor(public arr: string[]) {}
	get(index: number): string {
		return this.arr[index];
	}
}
// Generic class
//think of < T > like argument
class GetAnyThing<T> {
	constructor(public element: T[]) {}
	get(index: number): T {
		return this.element[index];
	}
}

let nArr = new GetNumber([1, 2, 3, 4]);
let sArr = new GetString(['a', 'b', 'c']);

// here we should specify the type of <T>
//note: let anyArr = new GetAnyThing<string>(['a', 'b', 'c']);

// you can rely on type inference in generics
let anyArr = new GetAnyThing(['a', 'b', 'c']);
console.log(anyArr.get(1));

/////////////////////////////////

//todo : Generics around functions
function printNumbers(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) console.log(arr[i]);
}

function printChars(arr: string[]): void {
	for (let i = 0; i < arr.length; i++) console.log(arr[i]);
}

function printAnyThing<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) console.log(arr[i]);
}

// note: it's recommended to use type annotation with generics instead of inference as it will help you catch errors
printAnyThing<number>([1, 2, 3, 4]);

/////////////////////////////////

//todo : Generic constrains

class Car {
	print() {
		console.log('iam a car');
	}
}

class House {
	print() {
		console.log('iam House');
	}
}
interface Printable {
	print(): void;
}

function printHouseOrCar<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print(); // Property 'print' does not exist on type 'T'.
		// ts saying that you pass arr of type T and now there is no guarantee that this type will have print method
		// note: so the solution is to promise to pass type T having print method on it
		// interfaces.
		// todo: we tell ts that whatever T we pass it will have all properties and methods that interface has
	}
}

printHouseOrCar<Car>([new Car(), new Car()]);
printHouseOrCar<Printable>([new House(), new Car()]);

// interface creates a new type , describing the property names and value types for object => only necessary properties not must all
interface Vehicle {
	name: string
	year: Date
	broken: boolean

	// not only limited for primitive types
	summery(): string
}

const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summery(): string {
		return `${this.name} made in ${this.year} and availability is ${this.broken}`
	},
}
const printVeicle = (car: {
	name: string
	year: number
	broken: boolean
}): void => {
	console.log(`car name:${car.name}`)
	console.log(`car born in :${car.year}`)
}

// but here we have some problems :
// 1-what if the oldCivic obj has 100 property
// 2- what if we have another function that takes oldCivic as parameter , would we write type annotations every time ??
// so the solution in interfaces
const printVehicleV2 = (car: Vehicle): void => {
	console.log(car.summery())
}
// we say here in order to call printVehicleV2 function you must pass in object that meets specification provided by Veicle interface
// or provide object that has name , year , broken properties
printVehicleV2(oldCivic)

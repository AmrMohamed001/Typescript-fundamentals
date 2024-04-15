import { faker } from '@faker-js/faker'
/*
error: says could not find declaration file for module faker
note: 
1- whenever we are writing TypeScript code, we are free to make use of JavaScript or more precisely, JavaScript libraries as much as we want to.

2- Or we could even reference JavaScript files that you and I write ourselves inside of our project from TypeScript code.

todo // But there's one little caveat here.

3-Remember, TypeScript wants to check your code and it checks your code by the use of types.
4- TypeScript wants to know all the different functions that you have, what different type of arguments they take and what type of value they return.
5-And in general, it wants to know all the different types of data that are flowing around your application.

fixme:If TypeScript doesn't have this information, then it cannot completely check your code.

- So when we start to think about using JavaScript code inside of our project, naturally all JavaScript code we write or make use of is not going to have any type information attached to it.
- And TypeScript can't really automatically figure out what different types of values are floating around JavaScript code.

note:So to fix this problem.
todo // TypeScript has the idea of type definition files.
- You can think of a type definition file as kind of an adapter between TypeScript code that you and I write and JavaScript libraries that we try to work with.
- A type definition file is going to tell the TypeScript compiler all the different functions that are available inside this JavaScript library, what type of argument they take and what type of value those functions return.
*/

import { Mappable } from './CustomMap'

export class User implements Mappable {
	name: string
	location: {
		lat: number
		lng: number
	}
	color: string = 'red'

	constructor() {
		this.name = faker.name.firstName()
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		}
	}

	markerContent(): string {
		return `User Name: ${this.name}`
	}
}

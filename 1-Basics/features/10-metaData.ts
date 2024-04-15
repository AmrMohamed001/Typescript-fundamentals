import 'reflect-metadata';

// object
const Car = {
	color: 'blue',
};
// object itself
Reflect.defineMetadata('secret', 'blue color', Car);
// property
Reflect.defineMetadata('secret', 'blue color property secret', Car, 'color');

//////////////////////////////////////////////////
// class
@printMetaData
class Plane {
	color: string = 'green';
	@setMeta('fly info')
	fly(): void {
		console.log('vrrrrrrrrrrrr');
	}
	@setMeta('down info')
	down(): void {
		console.log('brrrrrrrrrrrrrrrrrr');
	}
}
function setMeta(metaInfo: string) {
	return function (target: any, key: string) {
		Reflect.defineMetadata('secret', metaInfo, target, key);
	};
}
function printMetaData(target: typeof Plane) {
	// target refer to constructor
	for (let key in target.prototype) {
		// fly , down
		const secret = Reflect.getMetadata('secret', target.prototype, key);
		console.log(secret);
	}
}

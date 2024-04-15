class Boat {
	@testDecorators
	color: string = 'green';

	get formateColor(): string {
		return `color of boat is:${this.color}`;
	}

	sail(): void {
		console.log('boat sailed');
	}
}
function testDecorators(target: any, key: string): void {
	console.log(target[key]);
}

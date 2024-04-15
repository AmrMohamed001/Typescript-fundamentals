const profile = {
    name: 'amr',
    age: 21,
    coords: {
        lat: 60,
        lng: 90
    },
    setAge(age: number): void {
        this.age = age
    }
}
// regular type inference
const naming = profile.name
//console.log(name)

// destructuring
const {age, coords}: { age: number, coords: { lat: number; lng: number } } = profile
console.log(coords)

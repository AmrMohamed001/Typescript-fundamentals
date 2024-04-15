// in ts , arrays are restrict to only one type

//@type annotation
let x: string[];
x = ['a', 'b', 'c'];

//@type inference
const marks = ['ford', 'bmw', 'toyota'];

//2d array
const subversions: string[][] = [];
const versions = [
    ['f16'],
    ['f19']
];

// support flexability
const importantDates = [new Date(), '2023-12-12']
//////////////////////////////////////////////////////
//Typed Arrays can help us in:
// 1-correct inference with vars when extracting values out of array
const ele = x[1];
//2-prevent incorrect elements
x.push(100);
//3-help some functions like => (map,forEach,reduce,filter)
marks.map((ele): string => {
    return ele
})
// it's like an array but the difference is that it can hold different types and hold some property values in specific order
//for ex: if we want to represent the following obj in arr
const drink = {
    color: "black",
    soda: true,
    carboon: 62
}
const pepsi = ['black', true, 62];
// it holds only property values and lost some information but the idea of tuple that we memorize the order of the values => order is very very important
/* To convert pepsi into tupple*/
const cocacola: [string, boolean, number] = ['red', true, 80];


// type alias => as a shortcut to specify tuple type
type Drink = [string, boolean, number];
const sprit: Drink = ['yellow', false, 22];

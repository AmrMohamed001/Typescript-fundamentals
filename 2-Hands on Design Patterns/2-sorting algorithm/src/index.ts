//@ Bubble sort algorithm to sort different types of data like number , string , linkedList
import { NumberSort } from './NumberSort'
import { StringSort } from './StringSort'
import { LinkedList } from './LinkedList'

// 1- sort numbers
const numbers = new NumberSort([10, 8, 9, -1])
numbers.sort()
console.log(numbers.data)

//2- sort string
const str = new StringSort('dsa')
str.sort()
console.log(str.data)

//3- sort linkedList
const linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(-1)
linkedList.add(10)
linkedList.add(-9)
linkedList.sort()
linkedList.print()

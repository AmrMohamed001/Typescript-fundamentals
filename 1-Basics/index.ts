import axios from 'axios'

//@to idetify object properties types
interface Todo {
    id: Number
    title: String
    completed: Boolean
}

// to identify variables types
const print = function (id: Number, title: String, comoleted: Boolean) {
    console.log(`id for this is :${id}`)
    console.log(`tilte for this is :${title}`)
    console.log(`completed for this is :${comoleted}`)
}
const url = 'https://jsonplaceholder.typicode.com/todos/1'
axios.get(url).then(res => {
    const todo = res.data as Todo
    const id = todo.id
    const tilte = todo.title
    const completed = todo.completed
    print(id, tilte, completed)
})

import { compareAsc, format} from "date-fns";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { TodoList} from "./todo.js";

console.log('test');


let grocery = new Project('Grocery List');
let breakfast = new TodoList('Breakfast');
let test = new TodoList('test');
let cereal = new Task('cheerios', 'Buy Cheerios cereal', 'Today', 'High', false);
console.log(cereal.getDescription());
let milk = new Task('milk', 'Buy Milk', 'Today', 'High', false);

breakfast.addTask(cereal);
breakfast.addTask(milk);

console.log(breakfast.getTasks());
grocery.addList(breakfast);
grocery.addList(test);

console.log(grocery.getLists());

grocery.deleteList(test);


console.log(grocery.getLists());


//let testName = test.getName();
//console.log(testName);
//console.log('test2');
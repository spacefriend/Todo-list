import { compareAsc, format} from "date-fns";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { TodoList} from "./todo.js";
import './style.css';
import Logo from './img/logo.png';
import { initialLoad, addProject } from "./UI.js";

initialLoad();

//const header = document.getElementById('header');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

/*
const defaultProjectBtn = document.createElement('button');
const showAllBtn = document.createElement('button');
*/
const listCard = document.createElement('div');
listCard.className = "card";
/*
defaultProjectBtn.className = "project-tab";
defaultProjectBtn.innerHTML = "Project One";

showAllBtn.className = "project-tab";
showAllBtn.id = "show-all";
showAllBtn.innerHTML = "Show all";


const logo = new Image();
logo.src = Logo;

header.appendChild(logo);
header.appendChild(defaultProjectBtn);
header.appendChild(showAllBtn);
*/
content.appendChild(listCard);

addProject('testingtesting');



/*
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
*/
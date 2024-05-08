import { compareAsc, format} from "date-fns";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { TodoList} from "./todo.js";
import './style.css';
import Logo from './img/logo.png';
import { initialLoad, addProjectUI, displayProject } from "./UI.js";

initialLoad();

//const header = document.getElementById('header');
//const sidebar = document.getElementById('sidebar');
//const content = document.getElementById('content');

/*
const defaultProjectBtn = document.createElement('button');
const showAllBtn = document.createElement('button');

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

content.appendChild(listCard);
*/


/*
let grocery = new Project('Grocery List');
addProjectUI(grocery);
let breakfast = new TodoList('Breakfast');
let test = new TodoList('test');
let cereal = new Task('cheerios', 'Buy Cheerios cereal', 'Today', 'High', false);

let milk = new Task('milk', 'Buy Milk', 'Today', 'High', false);

breakfast.addTask(cereal);
breakfast.addTask(milk);


grocery.addList(breakfast);
grocery.addList(test);



displayProject(grocery);

let cleaning = new Project('Cleaning');
addProjectUI(cleaning);
let bathroom = new TodoList('Bathroom');
let toilet = new Task('clean toilet', 'Clean the toilet', 'Today', 'High', false);
let floor = new Task('clean floor', 'Mop and sweep bathroom floor', 'High', false);

bathroom.addTask(toilet);
bathroom.addTask(floor);

cleaning.addList(bathroom);
*/

//let testName = test.getName();
//console.log(testName);
//console.log('test2');

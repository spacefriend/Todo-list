import { compareAsc, format} from "date-fns";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { TodoList} from "./todo.js";
import './style.css';
import Logo from './img/logo.png';

function initialLoad (){
    const header = document.getElementById('header');

    const defaultProjectBtn = document.createElement('button');
    const showAllBtn = document.createElement('button');

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
}
//switch to class?
function addProject(projectName){
    const name = projectName;
    const newProjectElement = document.createElement('button');
    newProjectElement.className = "project-tab";
    newProjectElement.innerHTML = name;

    header.appendChild(newProjectElement);
}

function addList(){

}

function displayProject(project){
    //project.getName();
}

export { initialLoad, addProject }
import { compareAsc, format} from "date-fns";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { TodoList} from "./todo.js";
import './style.css';
import Logo from './img/logo.png';

function initialLoad (){
    const sidebar = document.getElementById('sidebar');
    const header = document.getElementById('header');
    const content = document.getElementById('content');

    function initialHeader(){
        
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
    initialHeader();
    function initialSidebar(){
        const sidebarUl = document.createElement('ul');
        const createProjectLi = document.createElement('li');
        const createProjectBtn = document.createElement('button');
        

        createProjectBtn.className = 'sidebar-btn';
        createProjectBtn.innerHTML = 'Create New Project';

        createProjectLi.appendChild(createProjectBtn);
        sidebarUl.appendChild(createProjectLi);
        sidebar.appendChild(sidebarUl);

    }
    initialSidebar();
}
//switch to class? split into create and add?
function addProjectUI(projectName){
    const name = projectName;
    let newProject = new Project(name);
    const newProjectElement = document.createElement('button');
    newProjectElement.className = "project-tab";
    newProjectElement.innerHTML = name;
    newProjectElement.addEventListener('click', (e) => {displayProject(newProject);})

    header.appendChild(newProjectElement);
}

function createProjectBtn(){

}

function addList(project, list){
    project.addList(list);
    //add it to UI too

}

function displayProject(project){
    //project.getName();
    let lists = project.getLists();
    lists.forEach((list) => {
        createListCard(list);

    });
    
    

}

function createListCard(list){
    const newListCard = document.createElement('div');
    newListCard.className = "card";

    const newListName = document.createElement('h1');
    newListName.className = "list-title";
    newListName.innerHTML = list.getName();
    newListCard.appendChild(newListName);

    let tasks = list.getTasks();

    tasks.forEach((task) => {
        const newTaskItem = document.createElement('INPUT');
        const newTaskItemName = document.createElement('label')

        newTaskItemName.className = "list-checklist";

        newTaskItem.setAttribute("type", "checkbox");
        newTaskItemName.innerHTML = task.getName();

        
        newListCard.appendChild(newTaskItem);
        newListCard.appendChild(newTaskItemName);
        console.log(task.getName());
    });
    
    content.appendChild(newListCard);
}

export { initialLoad, addProjectUI, displayProject }
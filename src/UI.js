import { compareAsc, format} from "date-fns";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { TodoList} from "./todo.js";
import './style.css';
import Logo from './img/logo.png';
import { Form, TaskForm } from './Form.js';


const header = document.getElementById('header');
const content = document.getElementById('content');

function initialHeader(){
        
    const defaultProjectBtn = document.createElement('button');
    const showAllBtn = document.createElement('button');
    const addProjectBtn = document.createElement('button');

    defaultProjectBtn.className = "project-tab";
    defaultProjectBtn.innerHTML = "Project One";
    showAllBtn.className = "project-tab";
    showAllBtn.id = "show-all";
    showAllBtn.innerHTML = "Show all";

    addProjectBtn.className = "project-tab";
    addProjectBtn.id = "add-project";
    addProjectBtn.innerHTML = "+";
    addProjectBtn.addEventListener('click', (e) => {createProjectForm()});

    const logo = new Image();
    logo.src = Logo;

    header.appendChild(logo);
    //header.appendChild(defaultProjectBtn);
   // header.appendChild(showAllBtn);
    header.appendChild(addProjectBtn);
}



function initialLoad (){
    initialHeader();
    
}

function getActiveProject (activeProject){

}

//switch to class? split into create and add?
//create function for adding eventlistener?
function addProjectUI(project){
    const name = project.getName();
    const newProjectElement = document.createElement('button');
    newProjectElement.className = "project-tab";
    newProjectElement.innerHTML = name;
    newProjectElement.addEventListener('click', (e) => {displayProject(project);})

    header.appendChild(newProjectElement);
    
}
function displayProject(project){
    clearParent(content);
    let lists = project.getLists();
    lists.forEach((list) => {
        createListCard(list);

    }); 

    const addListBtn = document.createElement('button');

    
    addListBtn.className = 'add-list-btn';
    addListBtn.innerHTML = '+';
    addListBtn.addEventListener('click', (e) => {createListForm(project)});

    content.appendChild(addListBtn);
    project.setActiveStatus(true);
}

function createListCard(list){
    const newListCard = document.createElement('div');
    newListCard.className = "card";

    const newListName = document.createElement('h1');
    newListName.className = "list-title";
    newListName.innerHTML = list.getName();
    newListCard.appendChild(newListName);

    const createTaskBtn = document.createElement('button');
    createTaskBtn.className = 'create-task-btn';
    createTaskBtn.innerHTML = '+';
    createTaskBtn.addEventListener('click', (e) => {createTaskForm(list, newListCard)});

    let tasks = list.getTasks();

    tasks.forEach((task) => {
        const newTaskItem = document.createElement('INPUT');
        const newTaskItemName = document.createElement('label');

        newTaskItemName.addEventListener('click', (e) =>{expandTask(newTaskItemName, task)}, false)

        newTaskItemName.className = "list-checklist";

        newTaskItem.setAttribute("type", "checkbox");
        newTaskItemName.innerHTML = task.getName();


        
        newListCard.appendChild(newTaskItem);
        newListCard.appendChild(newTaskItemName);
        console.log(task.getName());
    });

    newListCard.appendChild(createTaskBtn)
    content.appendChild(newListCard);
}

function addTaskUI(task, list){
    const newTaskItem = document.createElement('INPUT');
        const newTaskItemName = document.createElement('label');

        newTaskItemName.addEventListener('click', (e) =>{expandTask(newTaskItemName, task)}, false)

        newTaskItemName.className = "list-checklist";

        newTaskItem.setAttribute("type", "checkbox");
        newTaskItemName.innerHTML = task.getName();


        
        list.appendChild(newTaskItem);
        list.appendChild(newTaskItemName);
}

function expandTask(task, taskName){
    if (task.nextSibling && task.nextSibling.id == 'task-info'){
        task.parentElement.removeChild(task.nextSibling)
    }else{
        const taskInfo = document.createElement('p');
        taskInfo.innerHTML = 'Description: ' + taskName.getDescription() + '<br><br>Due: ' + taskName.getDueDate() + '<br><br>Priority: ' + taskName.getPriority();
        taskInfo.id = "task-info";
        task.insertAdjacentElement('afterend', taskInfo);
    }
}
//name, description, dueDate, priority, status)
function clearParent(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}

function createListForm(project){
    const listForm = new Form();
    listForm.setTitle('Create New List');
    listForm.setNameLabel('List Name: ');
    listForm.formBoxShow();
    listForm.form.className = 'project-form';
    listForm.nameField.type = 'text';
    listForm.submitBtn.type = 'submit';

    listForm.form.addEventListener('submit', (e) => {
        e.preventDefault();
        listFormValidation(listForm.nameField, listForm.formBox, project)
        clearParent(listForm.formBox);
    })
    listForm.appendElements(listForm.nameLabel, listForm.nameField, listForm.submitBtn);
    
}

function listFormValidation(name, form, project){
    const list = new TodoList(name.value);
    createListCard(list);
    form.classList.add("hidden");
    project.addList(list);
    clearParent(form);
}

function createTaskForm(list, listUI){
    const taskForm = new TaskForm();

    taskForm.formBoxShow();
    taskForm.setTitle('Create New Task');
    taskForm.setNameLabel('Task Name: ');
    taskForm.setDescLabel('Description: ');
    taskForm.setDueDateLabel('Due: ');
    taskForm.setPriorityLabel('Priority: ');

    taskForm.form.className = 'project-form';
    taskForm.nameField.type = 'text';
    taskForm.submitBtn.type = 'submit';
    taskForm.descField.type = 'text';
    taskForm.dueDateField.type = 'date';
    taskForm.priorityField.type = 'range';
    taskForm.priorityField.min = '0';
    taskForm.priorityField.max = '2';
    

    taskForm.form.addEventListener('submit', (e) => {
        e.preventDefault();
        taskFormValidation(taskForm.nameField, taskForm.descField, taskForm.dueDateField, taskForm.priorityField, taskForm.priorityField, taskForm.formBox, list, listUI)
        clearParent(taskForm.formBox);
    })
    
    taskForm.appendElements(taskForm.nameLabel, taskForm.nameField, taskForm.descLabel, taskForm.descField, taskForm.dueDateLabel, taskForm.dueDateField, taskForm.priorityLabel, taskForm.priorityField, taskForm.submitBtn);

}

function taskFormValidation(name, description, dueDate, priority, status, form, list, listUI){
    let newTask = new Task(name.value, description.value, dueDate.value, priority.value, status.value);
    list.addTask(newTask);
    addTaskUI(newTask, listUI);
    form.classList.add("hidden");

}

function createProjectForm(){
    /*
    const formBox = document.getElementById("form-box");
    const form = document.createElement("form");
    const title = document.createElement("h1");
    const nameLabel = document.createElement('label');
    const nameField = document.createElement('input');
    const submitBtn = document.createElement('input');

    title.innerHTML = 'Create New Project';
    nameLabel.innerHTML = 'Project Name: ';
    formBox.classList.remove("hidden");
    form.className = 'project-form';

    nameField.type = 'text';
    submitBtn.type = 'submit';
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        projectFormValidation(nameField, formBox)
        clearParent(formBox);
    })

    form.append(nameLabel, nameField, submitBtn);
    formBox.append(title, form);
    */
   const projectForm = new Form();

   projectForm.setTitle('Create New Project');
   projectForm.setNameLabel('Project Name: ');
   projectForm.formBoxShow();
   projectForm.form.className = 'project-form';
   projectForm.nameField.type = 'text';
   projectForm.submitBtn.type = 'submit';

   projectForm.form.addEventListener('submit', (e) => {
    e.preventDefault();
    projectFormValidation(projectForm.nameField, projectForm.formBox)
    clearParent(projectForm.formBox);
    })

   projectForm.appendElements(projectForm.nameLabel, projectForm.nameField, projectForm.submitBtn);
}

function projectFormValidation (name, form){
    console.log(name.value);
    let newProject = new Project(name.value);
    addProjectUI(newProject);
    form.classList.add("hidden");

}
export { initialLoad, addProjectUI, displayProject }
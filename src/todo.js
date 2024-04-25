class TodoList {

    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    getTasks(){
        return this.tasks;
    }
    setTasks(tasks){
        this.tasks = tasks;
    }
    addTask(task){
        this.tasks.push(task);
    }
    deleteTask(task){
        this.tasks = this.tasks.filter((taskName) => taskName !== task);
    }

}
export { TodoList }
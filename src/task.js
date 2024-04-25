class Task {
    constructor(name, description, dueDate, priority, status){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }

    getDueDate(){
        return this.dueDate;
    }
    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    getPriority(){
        return this.priority;
    }
    setPriority(priority){
        this.priority = priority;
    }

    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status;
    }

}
export { Task }
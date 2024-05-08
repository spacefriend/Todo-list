class Project {

    constructor(name) {
        this.name = name;
        this.lists = [];
        this.activeStatus = false;

    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    getLists(){
        return this.lists;
    }
    setLists(lists) {
        this.lists = lists;
    }

    getList(listName){
        return this.lists.find((list) => list.getName() === listName);

    }
    addList(newList){
        this.lists.push(newList);
    }
    deleteList(list){
        this.lists = this.lists.filter((listName) => listName !== list);
    }
    getActiveStatus(){
        return this.activeStatus;
    }
    setActiveStatus(status){
        this.activeStatus = status;
    }
}
export { Project }
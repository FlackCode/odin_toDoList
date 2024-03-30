class toDoItem{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
class projectItem{
    constructor(projectName){
        this.projectName = projectName;
        this.toDoList = [];
    }
    addToDoItem(toDoItem){
        this.toDoList.push(toDoItem);
    }
    removeToDoItem(toDoItem){
        const index = this.toDoList.indexOf(toDoItem);
        if (index != -1){
            this.toDoList.splice(index, 1);
        }
    }
}
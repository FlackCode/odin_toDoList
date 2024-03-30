export class toDoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
export default class projectItem {
    constructor(projectName) {
        this.projectName = projectName;
        this.toDoItems = []; 
        this.taskCount = 0; 
    }

    addToDoItem(toDoItem) {
        this.toDoItems.push(toDoItem);
    }

    removeToDoItem(toDoItem) {
        const index = this.toDoItems.indexOf(toDoItem);
        if (index != -1) {
            this.toDoItems.splice(index, 1);
        }
    }
}
export const projects = [];

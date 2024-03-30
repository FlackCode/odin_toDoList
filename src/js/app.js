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
// Test 1;
//let task = new toDoItem(`task`, `tasking`, `20th`, `high`);
//console.log(task); 
//let task = new toDoItem(`toDo Class`, `Make a to do class.`, `Today`, `high`);
//let project = new projectItem(`To do list`, task);
//console.log(project);
// Test 2;
//const task1 = new toDoItem(`Task1`, `This is task nr1`, `Today`, `High`);
//const task2 = new toDoItem(`Task2`, `This is task nr2`, `Tomorrow`, `Normal`);
//const project = new projectItem(`Important Project`);
//project.addToDoItem(task1);
//project.addToDoItem(task2);
//console.log(project);
//project.removeToDoItem(task1);
//console.log(project);
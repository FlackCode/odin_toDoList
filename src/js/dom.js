import projectItem from "./app.js";
import { projects, toDoItem } from "./app.js";
const pageContent = document.getElementById(`page`);
const navLinks = document.querySelectorAll(`.navLink`);
function switchTab(tabIndex) {
    switch (tabIndex) {
        case 0:
            clearPageContent();
            const homeHeader = document.createElement(`h1`);
            const homeSpan = document.createElement('span');
            const homeParagraph = document.createElement(`p`);
            homeHeader.textContent = 'Welcome to your ';
            homeSpan.textContent = 'todoList.';
            homeParagraph.textContent = 'Here you can create new projects and organize your current ones easily!';
            pageContent.appendChild(homeHeader);
            homeHeader.appendChild(homeSpan);
            pageContent.appendChild(homeParagraph);
            pageContent.style.display = `flex`;
            break;

        case 1:
            clearPageContent();
            pageContent.style.gap = `1rem`;
            pageContent.style.overflow = `auto`;
            pageContent.style.display = `block`;
            makeProjectElement();
            break;
        case 2:
            clearPageContent();
            pageContent.style.display = `flex`;
            let newButton = createButton();
            newButton.addEventListener(`click`, createForm);
            break;
    }
}
navLinks.forEach((link, index) => {
    link.addEventListener(`click`, () => {
        switchTab(index);
    });
});
function createButton(){
    let newButton = document.createElement(`button`);
    newButton.classList.add(`createButton`);
    newButton.innerText = `Create New Project!`;
    pageContent.appendChild(newButton);
    return newButton;
}
function createForm(){
    clearPageContent();
    let newForm = document.createElement(`form`);
    newForm.classList.add(`projectForm`);
    let formText = document.createElement(`div`);
    let formHeading = document.createElement(`h1`);
    let formParagraph = document.createElement(`p`);
    let formDiv = document.createElement(`div`);
    let createProject = document.createElement(`p`);
    let projectName = document.createElement(`input`);
    let projectButton = document.createElement(`button`);

    formText.classList.add(`formText`);
    formHeading.textContent = `Create Project!`;
    formParagraph.textContent = `Here you can create your project!`;
    formDiv.classList.add(`formDiv`);
    createProject.textContent = `Enter your project name to begin:`;
    projectName.placeholder = `Enter Project Name`;
    projectName.classList.add(`projectName`);
    projectButton.innerText = `Create`;
    projectButton.classList.add(`submitBtn`);

    pageContent.appendChild(newForm);
    newForm.appendChild(formText);
    formText.appendChild(formHeading);
    formText.appendChild(formParagraph);
    newForm.appendChild(formDiv);
    formDiv.appendChild(createProject);
    formDiv.appendChild(projectName);
    newForm.appendChild(projectButton);

    newForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let pName = newForm.querySelector('.projectName').value;
        if(pName){
            let newProject = new projectItem(pName);
            projects.push(newProject);
            switchTab(1);
            console.log(projects);
        }
        else if(!pName){
            projectName.placeholder = `ENTER A PROJECT NAME!`;
        }

        
        
    });
}

function clearPageContent() {
    pageContent.innerHTML = '';
}

function makeProjectElement() {
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add(`projectElement`);
        const projectHeading = document.createElement(`div`);
        projectHeading.classList.add(`projectHeading`);
        const projectDivName = document.createElement(`h1`);
        const expandProject = document.createElement(`button`);
        expandProject.classList.add(`expandButton`);
        const taskForm = document.createElement(`form`);
        taskForm.classList.add(`taskForm`);
        const taskFormTitle = document.createElement(`p`);
        const taskTitle = document.createElement(`input`);
        const taskDescription = document.createElement('input');
        taskDescription.setAttribute('maxlength', '32');
        const taskDue = document.createElement(`input`);
        taskDue.setAttribute('type', 'date');
        const taskPriority = document.createElement(`select`);
        const createTaskBtn = document.createElement(`button`);
        const taskDiv = document.createElement(`div`);
        taskDiv.classList.add(`projectTasks`);

        const option1 = document.createElement('option');
        option1.value = 'low';
        option1.textContent = 'Low';
        const option2 = document.createElement('option');
        option2.value = 'medium';
        option2.textContent = 'Medium';
        const option3 = document.createElement('option');
        option3.value = 'high';
        option3.textContent = 'High';

        let expanded = false;

        projectDivName.textContent = project.projectName;
        expandProject.innerText = `↓`;
        taskTitle.placeholder = `Enter task name`;
        taskDescription.placeholder = `Enter a short task description`;
        createTaskBtn.innerText = `Create Task`;
        taskFormTitle.textContent = `Create new task`;


        pageContent.appendChild(projectElement);
        projectElement.appendChild(projectHeading);
        projectHeading.appendChild(projectDivName);
        projectHeading.appendChild(expandProject);
        taskForm.appendChild(taskFormTitle);
        taskForm.appendChild(taskTitle);
        taskForm.appendChild(taskDescription);
        taskForm.appendChild(taskDue);
        taskForm.appendChild(taskPriority);
        taskForm.appendChild(createTaskBtn);
        projectElement.appendChild(taskForm);
        taskPriority.appendChild(option1);
        taskPriority.appendChild(option2);
        taskPriority.appendChild(option3);
        taskForm.style.display = `none`;
        projectElement.appendChild(taskDiv);


        expandProject.addEventListener(`click`, () => {
            if (expanded) {
                expanded = false;
                projectElement.style.height = `20vh`; 
                expandProject.innerText = `↓`;
                taskForm.style.display = `none`;
                
            } else {
                expanded = true;
                projectElement.style.height = `80vh`;
                expandProject.innerText = `↑`;
                taskForm.style.display = `flex`;
            }
        });
    });
}
switchTab(0);
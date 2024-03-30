import projectItem from "./app.js";
import { projects } from "./app.js";


let pageContent = document.getElementById(`page`);
let navLinks = document.querySelectorAll(`.navLink`);

let homeHeader = document.createElement(`h1`);
homeHeader.textContent = 'Welcome to your ';
pageContent.appendChild(homeHeader);

let homeSpan = document.createElement('span');
homeSpan.textContent = 'todoList.';
homeHeader.appendChild(homeSpan);

let homeParagraph = document.createElement(`p`);
homeParagraph.textContent = 'Here you can create new projects and organize your current ones easily!';
pageContent.appendChild(homeParagraph);

function switchTab(tabIndex) {
    switch (tabIndex) {
        case 0:
            clearPageContent();
            homeHeader.textContent = 'Welcome to your ';
            homeSpan.textContent = 'todoList.';
            homeParagraph.textContent = 'Here you can create new projects and organize your current ones easily!';
            pageContent.appendChild(homeHeader);
            homeHeader.appendChild(homeSpan);
            pageContent.appendChild(homeParagraph);
            break;

        case 1:
            clearPageContent();
            break;
        case 2:
            clearPageContent();
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
        let newProject = new projectItem(pName);
        projects.push(newProject);
        switchTab(1);
        console.log(projects);
    });
}

function clearPageContent() {
    pageContent.innerHTML = '';
}
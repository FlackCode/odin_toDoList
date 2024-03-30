let pageContent = document.getElementById(`page`);
let homeHeader = document.createElement(`h1`);
let homeParagraph = document.createElement(`p`);
let homeSpan = document.createElement('span');
let navLinks = document.querySelectorAll(`.navLink`);

homeHeader.textContent = 'Welcome to your ';
homeSpan.textContent = 'todoList.';
homeParagraph.textContent = 'Here you can create new projects and organize your current ones easily!';

pageContent.appendChild(homeHeader);
homeHeader.appendChild(homeSpan);
pageContent.appendChild(homeParagraph);
//console.log(navLinks)
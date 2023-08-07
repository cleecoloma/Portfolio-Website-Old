'use strict';

const projects = [];

function Projects(name, imageSource, description, tech, link) {
  this.name = name;
  this.imageSource = imageSource;
  this.description = description;
  this.tech = tech;
  this.link = link;
  projects.push(this);
}

const PROJECTS = document.getElementById('project-cards');

// display each project from projects array
function displayProjects(projects) {
  for (let i = 0; i < projects.length; i++) {
    let cardElement = document.createElement('div');
    let imgElement = document.createElement('img');
    let divElement = document.createElement('div');
    let h4Element = document.createElement('h4');
    let pElement = document.createElement('p');
    cardElement.setAttribute('id', 'cards');
    imgElement.setAttribute('src', projects[i].imageSource);
    cardElement.appendChild(imgElement);
    divElement.setAttribute('class', 'card-description');
    h4Element.textContent = projects[i].name;
    pElement.textContent = projects[i].description;
    divElement.appendChild(h4Element);
    divElement.appendChild(pElement);
    divElement.appendChild(createSkillsRow(projects[i]));
    divElement.appendChild(createLinksRow(projects[i]));
    cardElement.appendChild(imgElement);
    cardElement.appendChild(divElement);
    PROJECTS.appendChild(cardElement);
  }
}

function createSkillsRow(skills) {
  let tableElement = document.createElement('table');
  let tableBodyElement = document.createElement('tbody');
  let rowElement = document.createElement('tr');
  for (let i = 0; i < skills.tech.length; i++) {
    let cellElement = document.createElement('td');
    cellElement.textContent = skills.tech[i];
    rowElement.appendChild(cellElement);
  }
  tableBodyElement.appendChild(rowElement);
  tableElement.appendChild(tableBodyElement);
  return tableElement;
}

function createLinksRow(links) {
  let divElement = document.createElement('div');
  let linkElement = document.createElement('a');
  let link2Element = document.createElement('a');
  divElement.setAttribute('id', 'links');
  linkElement.setAttribute('href', links.link.github);
  linkElement.innerHTML =
    '<button><i class="fa-brands fa-square-github fa-2xl"></i>Code</button>';
  link2Element.setAttribute('href', links.link.live);
  link2Element.innerHTML =
    '<button><i class="fa-solid fa-link fa-2xl"></i>Demo</button>';
  divElement.appendChild(linkElement);
  divElement.appendChild(link2Element);
  return divElement;
}

new Projects(
  'Landscaping Company',
  'img/landscaping-company.png',
  'This is a landing page for a lawn company. A static landing page website that is responsive and works well with multiple screen sizes, including desktops and mobile phones, is designed to provide a consistent and optimized user experience regardless of the device being used.',
  ['JavaScript', 'HTML', 'CSS'],
  {
    github: 'https://github.com/cleecoloma/Landscaping-Company',
    live: 'https://cleecoloma.github.io/Landscaping-Company/',
  }
);

new Projects(
  'Landscaping Company 2',
  'img/landscaping-company.png',
  'This is a landing page for a lawn company. A static landing page website that is responsive and works well with multiple screen sizes, including desktops and mobile phones, is designed to provide a consistent and optimized user experience regardless of the device being used.',
  ['JavaScript', 'HTML', 'CSS'],
  {
    github: 'https://github.com/cleecoloma/Landscaping-Company',
    live: 'https://cleecoloma.github.io/Landscaping-Company/',
  }
);

new Projects(
  'Landscaping Company 3',
  'img/landscaping-company.png',
  'This is a landing page for a lawn company. A static landing page website that is responsive and works well with multiple screen sizes, including desktops and mobile phones, is designed to provide a consistent and optimized user experience regardless of the device being used.',
  ['JavaScript', 'HTML', 'CSS'],
  {
    github: 'https://github.com/cleecoloma/Landscaping-Company',
    live: 'https://cleecoloma.github.io/Landscaping-Company/',
  }
);

displayProjects(projects);
console.log(projects);

'use strict';

const projects = [];

function Projects(
  name,
  imageSource,
  description,
  tech,
  codeLink,
  deployedLink
) {
  this.name = name;
  this.imageSource = imageSource;
  this.description = description;
  this.tech = tech;
  this.codeLink = codeLink;
  this.deployedLink = deployedLink;
  projects.push(this);
}

const PROJECTS = document.getElementById('project-cards');

//
const listOfElements = ['div', 'img', 'div', 'h4', 'p']

// creates elements
function createAnElement(elementName, element, id, attribute) {
  elementName = document.createElement(element);
  elementName.setAttribute(id, attribute)
  return elementName;
}

// display each project from projects array
function displayProjects(projects) {
  for (let i = 0; i < projects.length; i++) {
    let imgElement = createAnElement('imgElement', 'img', 'id', projects[i].imageSource);
    let cardElement = document.createElement('div');
    // let imgElement = document.createElement('img');
    let divElement = document.createElement('div');
    let h4Element = document.createElement('h4');
    let pElement = document.createElement('p');
    cardElement.setAttribute('id', 'cards');
    // imgElement.setAttribute('src', projects[i].imageSource);
    cardElement.appendChild(imgElement);
    divElement.setAttribute('class', 'card-description');
    h4Element.textContent = projects[i].name;
    pElement.textContent = projects[i].description;
    divElement.appendChild(h4Element);
    divElement.appendChild(pElement);
    cardElement.appendChild(imgElement);
    cardElement.appendChild(divElement);
    PROJECTS.appendChild(cardElement);
  }
}

new Projects(
  'Landscaping Company',
  'img/landscaping-company.png',
  'This is a landing page for a lawn company. A static landing page website that is responsive and works well with multiple screen sizes, including desktops and mobile phones, is designed to provide a consistent and optimized user experience regardless of the device being used.'
);

new Projects(
  'Landscaping Company 2',
  'img/landscaping-company.png',
  'This is a landing page for a lawn company. A static landing page website that is responsive and works well with multiple screen sizes, including desktops and mobile phones, is designed to provide a consistent and optimized user experience regardless of the device being used.'
);

new Projects(
  'Landscaping Company 3',
  'img/landscaping-company.png',
  'This is a landing page for a lawn company. A static landing page website that is responsive and works well with multiple screen sizes, including desktops and mobile phones, is designed to provide a consistent and optimized user experience regardless of the device being used.'
);

displayProjects(projects);
console.log(projects);

import {prepProjectPage, printCards, printHome, printAbout} from "./projects.js";

const projClick = document.getElementById('projects');
projClick.addEventListener('click', () => {
  prepProjectPage();
  printCards();
});

const homeClick = document.getElementById('home');
homeClick.addEventListener('click', () => {
  printHome();
})

const aboutClick = document.getElementById('about');
aboutClick.addEventListener('click', () => {
  printAbout();
})
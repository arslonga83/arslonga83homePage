class card {
  constructor(title, link, img, alt, desc){
this.title = title;
this.link = link;
this.img = img;
this.alt = alt;
this.desc = desc;
  }
}

const cards = [];

cards[0] = new card(
  'Restaurant Page',
  'https://arslonga83.github.io/restaurant_page/',
  '../dist/media/restaurant-page-screenshot.png',
  'screenshot of a restaurant page',
  'A simple restaurant page using Javascript modules'
);
cards[1] = new card(
  'Library App',
  'https://arslonga83.github.io/library_app/',
  '../dist/media/library-app-screenshot.png', 
  'screenshot of a library page',
  'A library app to keep track of books and mark them read'
);
cards[2] = new card(
  'Sign-Up Page',
  'https://arslonga83.github.io/sign-up-form/',
  '../dist/media/sign-up-page-screenshot.png', 
  'screenshot of a signup page',
  'A sign up form for a fake business'
);
cards[3] = new card(
  'To-Do List',
  'https://arslonga83.github.io/todo-app/',
  '../dist/media/to-do-list-screenshot.png', 
  'screenshot of a todo app',
  'A to-do list app organized with separate projects and utilizing localStorage'
);
cards[4] = new card(
  'Rock Paper Scissors',
  'https://arslonga83.github.io/RockPaperScissors/',
  '../dist/media/rock-paper-scissors-screenshot.png', 
  'screenshot of rock paper scissors app',
  'A game of rock, paper, scissors (first to 5 wins) with random moves from the computer'
);
cards[5] = new card(
  'Calculator',
  'https://arslonga83.github.io/Calculator/',
  '../dist/media/calculator-app-screenshot.png', 
  'screenshot of calculator app',
  'A simple calculator app using the mouse or keyboard'
);
cards[6] = new card(
  'Etch-a-Sketch',
  'https://arslonga83.github.io/Etch-a-Sketch/',
  '../dist/media/etch-a-sketch-screenshot.png', 
  'screenshot of etch-a-sketch app',
  'A fun etch-a-sketch app in color or black and white'
);
cards[7] = new card(
  'Tic-Tac-Toe',
  'https://arslonga83.github.io/tic_tac_toe/',
  '../dist/media/tic-tac-toe-screenshot.png', 
  'screenshot of tic-tac-toe app',
  'Play tic-tac-toe against a friend or the not-so-smart computer'
);
cards[8] = new card(
  'Admin Dashboard',
  'https://arslonga83.github.io/admin_dashboard/',
  '../dist/media/admin-dashboard-screenshot.png', 
  'screenshot of admin dashboard page',
  'A simple layout for an admin dashboard using CSS grid and flexbox'
);


export function printCards() {
  cards.forEach(item => {
const gallery = document.getElementById('gallery');
let div = document.createElement('div');
div.classList.add('card');
let title = div.appendChild(document.createElement('h2'));
title.innerHTML = item.title;
let link = div.appendChild(document.createElement('a'));
link.href = item.link;
link.target = '_blank';
let img = link.appendChild(document.createElement('img'));
img.src = item.img;
let desc = div.appendChild(document.createElement('p'));
desc.innerHTML = item.desc;
gallery.appendChild(div);
  }
)};

export function prepProjectPage() {
  const main = document.getElementById('main');
  main.innerHTML = '';
  let h1 = document.createElement('h1');
  h1.classList.add('projecth1');
  h1.innerHTML = 'Some Things I Built';
  let div = document.createElement('div');
  div.id = 'gallery';
  main.appendChild(h1);
  main.appendChild(div);
}

export function printHome() {
  const main = document.getElementById('main');
  main.innerHTML = '';
  let h1 = document.createElement('h1');
  h1.innerHTML = 'My Coding Journey';
  main.appendChild(h1);
}

export function printAbout() {
  const main = document.getElementById('main');
  main.innerHTML = '';
  let h1 = document.createElement('h1');
  h1.innerHTML = 'About Me';
  main.appendChild(h1);
  let p = document.createElement('p');
  p.classList.add('aboutText');
  p.innerHTML = 'After 20 years in the church music industry, I\'m ready for a change. Excited to launch a new career where I can be learning new things everyday!';
  main.appendChild(p);
}

const container = document.querySelector('#container');
 
// create paragrapgh element and add it to the main div
const paragraph = document.createElement('p');
paragraph.textContent = 'Hey I\'m red!';
paragraph.style.color = 'red';
container.appendChild(paragraph);


// create h3 element and add it to the main div
const h3 = document.createElement('h3');
h3.textContent = 'Hey I\'m h3!';
h3.style.color = 'blue';
container.appendChild(h3);


// create another div element and give some style on it.
const div = document.createElement('div');
div.style.cssText = "background-color: pink ;border: 2px solid black";

// create h1 element and put some text on it
const h1 = document.createElement('h1');
h1.textContent = 'I am in div';

//create p element and put some text on it
const p = document.createElement('p');
p.textContent = 'Me too';

// add h1 and p element inside div element
div.appendChild(h1);
div.appendChild(p);

// put div element with h1 and p inside the container div
container.appendChild(div);


// Another way to do it
// container.innerHTML = '<h3 style="color: blue">I\'m a blue h3!</h3>'; 
// container.innerHTML = '<p style="color: blue">Hey I\'m red!</p>';


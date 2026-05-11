/*/ select the DOM elements for output
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const year = document.querySelector("#year");


document.getElementById("lastModified").innerHTML = document.lastModified;


// use the date object
const today = new Date();

//year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
*/

// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/



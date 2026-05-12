// select the DOM elements for output
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const year = document.querySelector("#year");


document.getElementById("lastModified").innerHTML = document.lastModified;


// use the date object
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});






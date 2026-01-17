// select the DOM elements for output
const year = document.querySelector("#year");


document.getElementById("lastModified").innerHTML = document.lastModified;


// use the date object
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
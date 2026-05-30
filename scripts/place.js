// FOOTER DATES
const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// WEATHER VALUES (STATIC)
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const windChillElement = document.getElementById("windchill");

// WIND CHILL FUNCTION (Metric)
function calculateWindChill(t, v) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

// CONDITIONS CHECK
if (temp <= 10 && wind > 4.8) {
  windChillElement.textContent = calculateWindChill(temp, wind) + " °C";
} else {
  windChillElement.textContent = "N/A";
}
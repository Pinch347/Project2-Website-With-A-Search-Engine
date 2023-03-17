document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsInput = document.getElementById("num-results");
const giphyResults = document.getElementById("giphy-results");

const apiKey = "4G7xDRRWoXU5yqWLtLvwRXvhdiYxEmCE";
let apiUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&limit=";

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    const limit = parseInt(resultsInput.value);
    if (query && limit && limit > 0 && limit <= 50) {
        // code goes here
      } else {
        alert("Please enter a valid number of results between 1 and 50.");
      }
      
  
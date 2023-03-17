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
            fetchGifs(query, limit);
        } else {
            alert("Please enter a valid number of results between 1 and 50.");
        }
    });

    function fetchGifs(query, limit) {
        const url = apiUrl + encodeURIComponent(limit) + "&q=" + encodeURIComponent(query);
      
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch GIFs");
            }
            return response.json();
          })
          .then((data) => {
            displayGifs(data.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
      
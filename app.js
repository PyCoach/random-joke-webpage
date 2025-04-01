function fetchJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            const jokeElement = document.getElementById('joke');
            if (data.type === "twopart") {
                jokeElement.innerHTML = data.setup + "<br><strong><br><br>" + data.delivery + "</strong>";
            } else {
                jokeElement.innerText = data.joke;
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            document.getElementById('joke').innerText = "Failed to load joke!";
        });
    }
<<<<<<< HEAD
window.onload = fetchJoke;
=======

>>>>>>> 16c3f193570f2d033a74f37eedb2be0b177b77be
  
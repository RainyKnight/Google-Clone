let userString;

document.getElementById("search").addEventListener("click", myFunction);

function myFunction() {
    userString = document.getElementById("user-input").value;
    console.log(userString);
    search(userString);
}

function search(string) {
    window.open(`https://www.google.com/search?q=${string}`);
}
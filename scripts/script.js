let userString;


document.getElementById("search").addEventListener("click", myFunction);

function myFunction() {
    userString = document.getElementById("user-input").value;
    console.log(userString);
    search(userString);
}

function search(string) {
    window.open(`https://www.google.com/search?q=${userString}`);
}


// Add + between each term and add to url
//https://www.google.com/search?q=(userString)
//https://www.google.com/search?q=google+search+api
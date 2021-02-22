let userString;


document.getElementById("search").addEventListener("click", myFunction);

function myFunction() {
    userString = document.getElementById("user-input").value;
    console.log(userString);
}
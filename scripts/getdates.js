
document.getElementById("year").innerHTML = (new Date).getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified)}`;


// Hamburger Button Menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

if (typeof (Storage) !== "undefined") {
    if (localStorage.visitCount) {
        localStorage.visitCount = parseInt(localStorage.visitCount) + 1;
    } else {
        localStorage.visitCount = 1;
    }
    document.getElementById("visitCount").textContent = localStorage.visitCount;
} else {
    alert("Browser not suported");
}

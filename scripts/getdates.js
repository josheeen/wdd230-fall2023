
document.getElementById("year").innerHTML = (new Date).getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified)}`;


// Hamburger Button Menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
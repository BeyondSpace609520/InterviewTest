let commerce = document.querySelector("#commerce_animation");
let row = document.querySelector("#change-content");

commerce.addEventListener('click', function (e) {
    row.classList.add('hide');
});

document.querySelector('.closebtn').addEventListener('click', removeElement);

function removeElement(e) {
    row.classList.remove('hide');
}
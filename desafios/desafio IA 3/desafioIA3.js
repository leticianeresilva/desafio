function openModal(src) {
    document.querySelector(".modal img").src = src;
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
}

function closeModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("current-date").textContent = new Date().toLocaleDateString("pt-BR");
});

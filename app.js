const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth/270)
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (5 - ratio) > 0) {
            movieLists[i].style.transform = `translateX(
                ${movieLists[i].computedStyleMap().get("transform")[0].x.value
            -300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

const ball = document.querySelector(".toogle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.toogle,.search-box,.modal-header,.modal-body,.popup-header,.popup-body");

ball.addEventListener("click",() => {
    items.forEach(item => {
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})

const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener("click", () =>{
    const modals = document.querySelectorAll(".modal.active")
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal")
        closeModal(modal)
    })
})

function openModal(modal){
    if (modal == null) return
    modal.classList.add("active")
    overlay.classList.add("active")
}

function closeModal(modal){
    if (modal == null) return
    modal.classList.remove("active")
    overlay.classList.remove("active")
}

const openPopupButtons = document.querySelectorAll("[data-popup-target]")
const closePopupButtons = document.querySelectorAll("[data-close-popup]")

openPopupButtons.forEach(button => {
    button.addEventListener("click", () => {
        const popup = document.querySelector(button.dataset.popupTarget)
        openModal(popup)
    })
})

overlay.addEventListener("click", () =>{
    const popups = document.querySelectorAll(".popup.active")
    popups.forEach(popup => {
        closeModal(popup)
    })
})

closePopupButtons.forEach(button => {
    button.addEventListener("click", () => {
        const popup = button.closest(".popup")
        closeModal(popup)
    })
})

function openPopup(popup){
    if (popup == null) return
    popup.classList.add("active")
    overlay.classList.add("active")
}

function closePopup(popup){
    if (popup == null) return
    popup.classList.remove("active")
    overlay.classList.remove("active")
}

/* var movies = ['Kimetsu no Yaiba: Mugen Ressha-Hen']

function apiCall() {
    console.log(movies[0])
    $.getJSON('https://www.omdbapi.com/?apikey=241d204e&t=' + encodeURI(movies[0]))
    .then((response) => {
        console.log(response);
    });
}



apiCall();

console.log(document.getElementsByClassName("featured-content")) */
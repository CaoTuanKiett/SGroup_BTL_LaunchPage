

const peopleOptions = document.querySelectorAll('.people__right--item')

peopleOptions.forEach(option => {
    option.addEventListener('click', () => {

        for(let i= 0; i < peopleOptions.length; i++){
            if (peopleOptions[i] == option) {
                option.classList.toggle("people__item--click");
            }
            else {
                peopleOptions[i].classList.remove("people__item--click");
            }

        }

    });
});


// HOME AWARD

const homeOptionMenu = document.querySelector(".home__select-menu");
const homeSelectBtn = document.querySelector(".home__select-btn");
const homeOptions = document.querySelectorAll(".home__option");
const homesBtn_text = document.querySelector(".home__sBtn-text");

homeSelectBtn.addEventListener("click", () => homeOptionMenu.classList.toggle("home__active"));

homeOptions.forEach(option => {
    option.addEventListener("click", () =>{
        let homeSelectedOption = option.querySelector(".home__option-text").innerText;

        homesBtn_text.innerText = homeSelectedOption;

        homeOptionMenu.classList.remove("home__active");
    });
    

});



// CONTACT

const contactOptionMenu = document.querySelector(".contact__select-menu");
const contactSelectBtn = document.querySelector(".contact__select-btn");
const contactOptions = document.querySelectorAll(".contact__option");
const contactsBtn_text = document.querySelector(".contact__sBtn-text");

contactSelectBtn.addEventListener("click", () => contactOptionMenu.classList.toggle("contact__active"));

contactOptions.forEach(option => {
    option.addEventListener("click", () =>{
        let contactSelectedOption = option.querySelector(".contact__option-text").innerText;

        contactsBtn_text.innerText = contactSelectedOption;

        contactOptionMenu.classList.remove("contact__active");
    });
    

});






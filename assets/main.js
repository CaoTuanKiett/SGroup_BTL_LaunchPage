// HEADER SCROLL
window.onscroll = () =>{
    const docScroll =document.documentElement.scrollTop;
    const header = document.querySelector(".header")
    if(docScroll > 100 && docScroll< 500) {
        header.style.top = "-100px";
        header.style.transition = "all 0.2s ease-in-out";
    }
    else{
        header.style.top = "0px";
    }
}




// SCROLL 

const links =  document.querySelectorAll('.link');
links.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
        const element = document.getElementById(item.getAttribute('data-link'));
        element.scrollIntoView({behavior:'smooth' , block:'start'});
        

        for (let index = 0; index < links.length; index++) {

            if(links[index].classList.contains("change_color")){
                links[index].classList.remove("change_color")
            }

            if (links[index] == item) {
                item.classList.add("change_color");
            }
            
        }

    })
})




// NAVBAR

document.querySelector('.navbar__menu').onclick = () =>{
    document.querySelector('.navbar__list').classList.toggle('displayBlock');
}

const navbarItem = document.querySelectorAll('.navbar__item')
navbarItem.forEach(option => {
    option.addEventListener('click', () => {
        
    document.querySelector('.navbar__list').classList.toggle('displayBlock');

    });
});






// PEOPLE

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







// OUR

const selectImg = document.querySelectorAll('.our__body--img');

const numberLast = document.querySelector('.number--last');
const numberFirst = document.querySelector('.number--first');


selectImg.forEach(image => {
    image.onclick = () => {

        image.classList.add('change');

        let changeImg = document.querySelector('.change .our__item--img img');

        document.querySelector('.our__popup-image').style.display = 'flex';
        document.querySelector('.our__popup-image img').src = changeImg.getAttribute('src');

        numberFirst.innerText = '..';
        numberLast.innerText = selectImg.length;

        image.classList.remove('change');
    }
});

document.querySelector('.our__popup-image span').onclick = () => {
    document.querySelector('.our__popup-image').style.display = 'none';
}

document.querySelector('.our__popup-image .our__overlay').onclick = () => {
    document.querySelector('.our__popup-image').style.display = 'none';
}






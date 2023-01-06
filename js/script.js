carouselCounter = 1;
const racasDropdown = document.getElementsByName('racas')[0];
const cidadesDropdown = document.getElementsByName('cidades')[0];
const faccoesDropdown = document.getElementsByName('faccoes')[0];
const nav = document.querySelector('nav');
const navTogglerBtn = document.getElementById('btnToggler');

const carousel = () => {
    const carouselItens = document.querySelectorAll(".carousel-item");
    if(carouselCounter == 3) carouselCounter = 0;

    carouselCounter == 0 
    ? carouselItens[2].classList.remove('active') 
    : carouselItens[carouselCounter - 1].classList.remove('active');
    carouselItens[carouselCounter].classList.add('active');
    carouselCounter++;
}
setInterval(() => {
    carousel();
}, 5000);

racasDropdown.addEventListener('click', (e) => {
    dropDownHandler(e);
})

cidadesDropdown.addEventListener('click', (e) => {
    dropDownHandler(e);
})

faccoesDropdown.addEventListener('click', (e) => {
    dropDownHandler(e);
})

const dropDownHandler = (e) => {
    const selectedDropdown = e.target.nextElementSibling;
    if(selectedDropdown.classList.contains('active')) {
        selectedDropdown.classList.remove('active');
    } else {
        closeAllDropdowns();
        selectedDropdown.classList.add('active');
    }
}

const closeAllDropdowns = () => {
    const allDropdowns = document.getElementsByClassName('dropdown-menu');
    var arr = Array.prototype.slice.call( allDropdowns )
    arr.forEach((dropdown) => {
        dropdown.classList.remove('active')
    });
}


navTogglerBtn.addEventListener('click', () => {
    navHandler();
})

const navHandler = () => {
    nav.classList.contains('open') 
    ? nav.classList.remove('open')
    : nav.classList.add('open')
}

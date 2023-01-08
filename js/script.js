import { posts } from "../js/shared/posts.js"
import { PostRoute } from "../js/shared/postHandler.js"

let carouselCounter = 1;
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

const renderPosts = () => {
    const container = document.getElementById('novosPosts');
    container.innerHTML = "";
    posts.forEach(post => {
        container.appendChild(createPost(post));
    });
}

const createPost = (post) => {
    const article = document.createElement('article');
    article.classList.add('card');
    article.classList.add('bg-dark');
    article.classList.add('col-12');
    const header = document.createElement('h5');
    header.classList.add('card-header');
    header.innerHTML = post.author
    article.appendChild(header);
    const body = document.createElement('div');
    body.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerHTML = post.title
    body.appendChild(title);
    const text = document.createElement('p');
    text.classList.add('card-text');
    text.innerHTML = post.text[0];
    body.appendChild(text);
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerHTML = 'Read more';
    button.onclick = () => PostRoute(post.id);
    body.appendChild(button);
    article.appendChild(body);
    return article;
}

const renderPopularPosts = () => {
    const container = document.getElementById('populares');
    container.innerHTML = "";
    const title = document.createElement('h3');
    title.innerHTML = 'Popular';
    container.appendChild(title);
    posts.forEach(post => {
        container.appendChild(createPopularPost(post));
    });
}

const createPopularPost = (post) => {
    const article = document.createElement('article');
    article.classList.add('card');
    const body = document.createElement('div');
    body.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerHTML = post.title;
    body.appendChild(title);
    const text = document.createElement('p');
    text.classList.add('card-text');
    text.innerHTML = post.resume;
    body.appendChild(text);
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerHTML = 'Read more';
    button.onclick = () => PostRoute(post.id);
    body.appendChild(button);
    article.appendChild(body);
    return article;
}

const cssHandler = document.getElementById('cssHandler');
const css1 = document.getElementById('css1');
const css2 = document.getElementById('css2');
const cssFlex = `${window.location.origin}/css/index.css`;
const cssBootstrap = `${window.location.origin}/css/bootstrap/bootstrap.min.css`;
const cssBootstrapCustom = `${window.location.origin}/css/bootstrap/bootstrap-custom.css`;

cssHandler.addEventListener('click', () => {
    changeCss();
})

const changeCss = () => {
    if(css1.href == cssBootstrap) {
        css1.href = cssFlex;
        css2.href = cssFlex;
    } else {
        css1.href = cssBootstrap;
        css2.href = cssBootstrapCustom;
    }
}



window.addEventListener('load', () =>{
    renderPosts();
    renderPopularPosts();
});

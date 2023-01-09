import { posts } from "../../js/shared/posts.js"
import { PostRoute } from "../../js/shared/postHandler.js"

const form = document.getElementById('form');

const renderPost = () => {
    const container = document.getElementById('post');
    container.innerHTML = '';
    const currentPostId = sessionStorage.getItem('postId')
    const currentPost = posts.find(p => p.id == currentPostId);
    const title = document.createElement('h3');
    title.classList.add('post-title');
    title.innerHTML = currentPost.title;
    container.appendChild(title);
    const resume = document.createElement('p');
    resume.classList.add('post-resume');
    resume.innerHTML = currentPost.resume;
    container.appendChild(resume)
    const author = document.createElement('span');
    author.classList.add('post-author');
    author.innerHTML = currentPost.author;
    container.appendChild(author)
    const figure = document.createElement('figure');
    figure.classList.add('post-img');
    const img = document.createElement('img');
    img.src = `../../images/posts/${currentPost.imgUrl}`;
    figure.appendChild(img);
    container.appendChild(figure);
    currentPost.text.forEach(paragraph => {
        const p = document.createElement('p');
        p.innerHTML = paragraph;
        container.appendChild(p);
    });
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

form.addEventListener('submit', (e) => {
    const email = document.getElementById('email');
    const msg = `Thank you for Subscribing \n A confirmation email has been sent to ${email.value}`
    window.alert(msg);
});

window.addEventListener('load', () =>{
    renderPost();
    renderPopularPosts();
});
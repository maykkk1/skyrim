const cssHandler = document.getElementById('cssHandler');
const css1 = document.getElementById('css1');
const css2 = document.getElementById('css2');
const cssFlex = 'http://127.0.0.1:5500/css/index.css';
const scriptBootstrap = 'http://127.0.0.1:5500/js/bootstrap/bootstrap.min.js';
const cssBootstrap = 'http://127.0.0.1:5500/css/bootstrap/bootstrap.min.css';
const cssBootstrapCustom = 'http://127.0.0.1:5500/css/bootstrap/bootstrap-custom.css';

cssHandler.addEventListener('click', () => {
    changeCss();
})

const changeCss = () => {
    if(css1.href == cssBootstrap) {
        css1.href = cssFlex;
        css2.href = '';
    } else {
        css1.href = cssBootstrap;
        css2.href = cssBootstrapCustom;
    }
}


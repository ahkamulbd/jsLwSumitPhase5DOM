// const h1Content = document.querySelector('#demo-id');
// h1Content.style.color = 'red';

// setTimeout(function () {
//     const h1Content = document.querySelector('#demo-id');
//     h1Content.style.color = 'red';
// }, 2000);

function changingStyleWithCSS() {
    setTimeout(function () {
        const h1Content = document.querySelector('#demo-id');
        h1Content.style.color = 'red';
        h1Content.style.fontSize = '60px';
    }, 2000);
}
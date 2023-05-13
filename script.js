let text = document.getElementById('text');
let daun = document.getElementById('daun');
let gunung1 = document.getElementById('gunung1');
let gunung4 = document.getElementById('gunung4');
let gunung5 = document.getElementById('gunung5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    daun.style.top = value * -0.8 + 'px';
    daun.style.left = value * 1.5 + 'px';
    gunung5.style.left = value * 1.5 + 'px';
    gunung4.style.left = value * -1.5 + 'px';
    gunung1.style.top = value * 0.8 + 'px';
});
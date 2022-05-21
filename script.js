const audio1 = document.querySelector('#audio1');
const audio2 = document.querySelector('#audio2');
const love = document.querySelector('#img');
const status = document.querySelector('#status');
const status1 = document.querySelector('#status1');
function hold() {
    audio1.play();
    love.style.width = '300px';
    love.style.left = '0px';
    love.style.animation = 'loveimg 0.7s linear infinite';
}
function leave() {
    audio1.pause();
    love.style.width = '200px';
    love.style.left = '0px';
    love.style.animation = '0.6s linear infinite';
}
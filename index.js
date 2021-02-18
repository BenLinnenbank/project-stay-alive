// Map
const playField = document.getElementById('box');

// Player
const player = document.getElementById('red-box');

// Onscroll motion detector
document.getElementById("myDIV").onscroll = () => {
    const aliens = document.querySelectorAll('.alien');
    aliens.forEach((alien) => {
        detectHit(alien);
    });
};

// Random enemy generator
setInterval(() => { 
    const alien = document.createElement('div');
    alien.setAttribute('class', 'alien');
    const image = document.createElement('img');
    const randomNum = Math.floor(Math.random() * Math.floor(3) + 1);
    const randomAlienImagePath = `./assets/ghost${randomNum}.png`;
    image.setAttribute('src', randomAlienImagePath);
    alien.appendChild(image);
    alien.style.left = `${Math.floor(Math.random() * Math.floor(900))}px`;
    alien.style.top = `${Math.floor(Math.random() * Math.floor(500))}px`;
    alien.addEventListener('click', (e) => fireLaser(e));
    playField.appendChild(alien);
}, 5000);

// Motion detector
const detectHit = (enemy) => {
    const enemyLocation = enemy.getBoundingClientRect();
    const playerLocation = player.getBoundingClientRect();
    if (playerLocation.left <= enemyLocation.right) {
        if (playerLocation.top <= enemyLocation.bottom) {
            if (playerLocation.bottom >= enemyLocation.top) {
                if (playerLocation.right >= enemyLocation.left) {
                    return alert('left you bumped into an alien');
                }
            }
        }
    }
};

const fireLaser = (e) => {
    if (document.querySelector('#laser')) return;
    const enemyLocation = e.target.getBoundingClientRect();
    const playerLocation = player.getBoundingClientRect();

    const laser = document.createElement('div');    
    laser.setAttribute('id', 'laser');

    playField.appendChild(laser);

    const movingLaser = document.querySelector('#laser');
    movingLaser.style.left = `${playerLocation.left + 10}px`;
    movingLaser.style.top = `${playerLocation.top + 30}px`;

    setInterval(() => {
        movingLaser.style.left = `${enemyLocation.left + 10}px`;
        movingLaser.style.top = `${enemyLocation.top + 50}px`;
    }, 200);
    setInterval(() => {
        movingLaser.remove();
        e.target.parentNode.remove();
    }, 850);
}
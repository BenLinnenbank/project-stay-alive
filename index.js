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
const detectHit = (enemyLocation) => {
    const enemy = enemyLocation.getBoundingClientRect();
    const movingPlayer = player.getBoundingClientRect();
    if (movingPlayer.left <= enemy.right) {
        if (movingPlayer.top <= enemy.bottom) {
            if (movingPlayer.bottom >= enemy.top) {
                if (movingPlayer.right >= enemy.left) {
                    return alert('left you bumped into an alien');
                }
            }
        }
    }
};

const fireLaser = (e) => {
    const enemy = e.target.getBoundingClientRect();
    const movingPlayer = player.getBoundingClientRect();

    const laser = document.createElement('div');
    laser.setAttribute('id', 'laser');

    playField.appendChild(laser);

    const movingLaser = document.querySelector('#laser');
    movingLaser.style.left = `${movingPlayer.left + 10}px`;
    movingLaser.style.top = `${movingPlayer.top + 30}px`;

    setInterval(() => {
        movingLaser.style.left = `${enemy.left + 10}px`;
        movingLaser.style.top = `${enemy.top + 50}px`;
    }, 200);
    setInterval(() => {
        movingLaser.remove();
        e.target.parentNode.remove();
    }, 850);
}
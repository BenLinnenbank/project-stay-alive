// Enemies
const aliens = document.querySelectorAll('.alien');

// Bonus Lives

// Player
const player = document.getElementById('red-box');

// Onscroll motion detector
document.getElementById("myDIV").onscroll = () => {
    aliens.forEach((alien) => {
        detectHit(alien);
    });
};

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
const player = document.getElementById('player');
let isJumping = false;
let position = 50; // Posição inicial do jogador

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveRight();
    }
    if (event.key === 'ArrowLeft') {
        moveLeft();
    }
    if (event.key === ' ') {
        jump();
    }
});

function moveRight() {
    position += 10; // Move 10 pixels para a direita
    player.style.left = position + 'px';
}

function moveLeft() {
    position -= 10; // Move 10 pixels para a esquerda
    player.style.left = position + 'px';
}

function jump() {
    if (isJumping) return;
    isJumping = true;

    let jumpHeight = 0;
    const jumpInterval = setInterval(() => {
        if (jumpHeight >= 100) {
            clearInterval(jumpInterval);
            const fallInterval = setInterval(() => {
                if (jumpHeight <= 0) {
                    clearInterval(fallInterval);
                    isJumping = false;
                }
                jumpHeight -= 5; // Desce 5 pixels
                player.style.bottom = (50 + jumpHeight) + 'px'; // Atualiza a posição do jogador
            }, 20);
        }
        jumpHeight += 5; // Sobe 5 pixels
        player.style.bottom = (50 + jumpHeight) + 'px'; // Atualiza a posição do jogador
    }, 20);
}
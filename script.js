const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CAN_WIDTH = canvas.width = 600;
const CAN_HEIGHT = canvas.height = 600;

const playerImg = new Image();
playerImg.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;


function animate() {
    ctx.clearRect(0, 0, CAN_WIDTH, CAN_HEIGHT);

    // ctx.fillRect(50, 50, 100, 100);
    // use the first 4 values to cut a portion of img from a sprite sheet 
    //last 4 values are for starting position x and y and size of the img on the canvas
    ctx.drawImage(playerImg, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    requestAnimationFrame(animate);

};
animate();

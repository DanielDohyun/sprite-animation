const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CAN_WIDTH = canvas.width = 600;
const CAN_HEIGHT = canvas.height = 600;

const playerImg = new Image();
playerImg.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let playerState = 'run'
// playerImg.src = 'stick.png';
// const spriteWidth = 23;
// const spriteHeight = 340;

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }
]

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }

    for (let i = 0; i < state.frames; i++) {
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({ x: positionX, y: positionY });
    }

    spriteAnimations[state.name] = frames;
});

function animate() {
    ctx.clearRect(0, 0, CAN_WIDTH, CAN_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

     ctx.drawImage(playerImg, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

   
     //slowing down the animation
    // if (gameFrame % staggerFrames == 0) {
    //     if (frameX < 5) frameX++;
    //     else frameX = 0;
    // }

    gameFrame++;
    requestAnimationFrame(animate);

};
animate();

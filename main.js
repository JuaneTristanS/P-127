song1 ="";
song2 ="";

xcord =0;
ycord =0;

function preload() {
    song1 = loadSound();
    song2 = loadSound();
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.position(300, 160)

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function setup() {
    canvas = createCanvas(640, 4800);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 175, 110, 260, 200);
    fill(255, 0, 188);
    stroke(255, 255, 255);
    rect(105, 40, 400, 20);
    rect(505, 60, 20, 300);
    rect(105, 360, 400, 20);
    rect(85, 60, 20, 300);
    fill(255, 0, 0);
    stroke(255, 255, 255);
    circle(95, 50, 75);
    circle(95, 365, 75);
    circle(515, 50, 75);
    circle(515, 365, 75);
    tint(tint_color);
}

function take_snapshot() {
    save('my image.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}
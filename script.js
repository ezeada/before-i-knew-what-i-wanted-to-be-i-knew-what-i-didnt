let vid;
let timer = 0;
let playing = true;

function setup() {
  createCanvas(1600, 1600);

  vid = createVideo("iwaswrong.mp4");
  vid.size(400, 400);
  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader

}

function draw() {
  if (millis() >= 5000+timer) { // every 5 seconds
    background(random(255),random(255),random(255));
    timer = millis();
  }
  let img = vid.get();
  image(img, 400, 400); // redraws the video frame by frame in                           p5
}

// function keyPressed() {
//  vid.time(random(vid.duration())) 
// }

function mousePressed() {
 if (playing) {
   vid.pause();
 }
  else {
    vid.play();
  }
  playing = !playing;
}

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
  // Create new p5 graphics object
 shape = createGraphics(100, 100);
  
  
 // Draw the shape
 shape.strokeWeight(5);
 shape.point(84, 91);
 shape.point(68, 19);
 shape.point(21, 17);
 shape.point(32, 91);
 shape.strokeWeight(1);

 shape.fill(0);
 shape.beginShape();
 shape.curveVertex(84, 91);
 shape.curveVertex(84, 91);
 shape.curveVertex(68, 19);
 shape.curveVertex(21, 17);
 shape.curveVertex(32, 91);
 shape.curveVertex(32, 91);
 shape.endShape(CLOSE);
 
  let img = vid.get();
  // image(img, 400, 400); // redraws the video frame by frame in                           p5
  //image(shape, 100, 0)
 
  // Use the shape as a mask
  img.mask(shape)
 
  image(img, 200, 0)
}

function mousePressed() {
 if (playing) {
   vid.pause();
 }
  else {
    vid.play();
  }
  playing = !playing;
}

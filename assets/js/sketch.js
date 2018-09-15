var song;
var button;
var bird;
var pipes = [];
function setup() {
  createCanvas(1600, 900);
  song = loadSound("assets/songs/believe.mp3", loaded);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  button.position(1610,880);
  button.style('font-size', '20px');
  img = loadImage("assets/images/background.jpg");
  bird = new Bird();
  pipes.push(new Pipe());
}

function loaded(){
  console.log("loaded");
}

function togglePlaying(){
  if (!song.isPlaying()){
      song.play();
      song.setVolume(0.3);
      button.html("stop");
  } else {
    song.stop();
    button.html("play");
  }

}



function draw() {

  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }


  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }



}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
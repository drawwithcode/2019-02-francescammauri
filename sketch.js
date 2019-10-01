var colors1 = ['#AE811D', '#E5A20F', '#5DB130', '#4E5BA5', '#E067A3'];
var colors2 = ["AF3E25", "#E4401B", "#E2DF26","#83C8B7", "#7469AD"];
var colors3 = ["#2674B0", "#15A0FF", "#BB4492","#F4A868", "#E3E366"];
var colors4 = ["#2FA836", "#5BB030","#2F4597", "#EA4B79","#FBBE4E" ];
function preload(){
  // put preload code here

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background("black")
frameRate(8);
}

function draw() {

  for(var x = 0; x < width; x += 200) {
    for(var y = 0; y < height; y += 200) {
noFill()
strokeWeight(2.5)
      var index = floor(random() * 4);
      if ( x > width/4){
        stroke(colors1[index]);
      } else {
        stroke(colors2[index]);
      }
if (x> width / 2){
  stroke(colors3[index]);
  if ( x > width/2 + width/4) {
    stroke(colors4[index]);
  }
}
      rect(x,y, mouseX, mouseY);

    }
    }
  //text
    translate((width/2)-330, 100);
    fill("black");
    stroke("white");
    rect(10,0,600,50);
textFont("Helvetica")
textSize(24)
fill("white");
noStroke()
text("I like the way you move it, if you like it, move it!", 65,35);


}


img="";
 status="";
 object = "";
objects="";
function preload() {
   
    
}
function draw() {
  if (status != "") {
    image(vdeo, 0, 0, 640, 420);
    for (i = 0; i < object.length; i++) {

      fill("#FF0000");
      percent = floor(object[i].confidence * 100);
      text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
      noFill();
      stroke("#FF0000");
      rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
  }
 if (object.length = 0) {
   document.getElementById("f/n").innerHTML="Baby found";
 }
else{ 
  document.getElementById("f/n").innerHTML="Baby not found";
}
image(video, 0, 0, 480, 380);
if(status!="") {
    objectDetector.detect(video,gotResults);
    for(i =0 ; i<objects.length ; i++){
        document.getElementById("status").innerHTML= "Status = Object Detecting";
        fill("#FF0000");
        percentage = floor(objects[i].confidence *100);
        text(objects[i].label + " " + percentage + "% " ,  objects[i].x + 15 , objects[i].y +15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}
function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML="Status = Detecting object";

}
}

function modelLoaded() {
    console.log( " MODEL LOADED ");
    status = true;
    objectDetector.detect(img,gotResults)
} 


function  start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting objects";
    s=  text(object[i].label);
    stop =webcamLiveView.stop();
document.getElementById("in").innerHTML= s ;
objectDetector.detect(gotResults);
}
function gotResults(error,results) {
  if(error){
      console.log(error);
  }
  else{
      console.log(results);
      objects=results;
      
  }
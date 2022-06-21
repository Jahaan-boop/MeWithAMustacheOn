var mustache_X = 0;
var mustache_Y = 0;
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO)
video.size(300,300);
video.hide();
posenet = ml5.poseNet(video,modelloaded)
posenet.on("pose",gotPoses)
}

function preload(){
mustache=loadImage("mustache.png")
}

function draw(){
    image(video,0,0,300,300);
image(mustache,mustache_X,mustache_Y,60,60)
    }

function snapshot(){
save("mymustache.png")
}

function modelloaded(){
console.log("PoseNet has been successfully initialized.")
}

function gotPoses(results){
if(results.length>0){
console.log(results);
mustache_X = results[0].pose.nose.x-20;
mustache_Y = results[0].pose.nose.y+10;
console.log("mustache_X:"+mustache_X);
console.log("mustache_Y:"+mustache_Y);
}
}

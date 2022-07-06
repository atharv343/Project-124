function setup() {
 video=createCapture(VIDEO);
 video.size(500,500);
 video.position(200,150);
 poseNet=ml5.poseNet(video,modelLoaded);
 posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Loaded!");
}
function gotPoses(results){
    if (result.length>0){
        console.log(results);
    }
}    
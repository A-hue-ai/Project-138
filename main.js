function setup()
{
    canvas = createCanvas(650, 400);
    video = createCapture(VIDEO);
    video.size(600,300);

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Model Loaded!');
}


//https://teachablemachine.withgoogle.com/models/Dm_nmVhIx/

Webcam.set({
    width:400,
    height:300,
    image_format:"png",
    png_quality:100
});
camera = document.getElementById("camera");
Webcam.attach('#camera')


function Take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">'
    })
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("", modelLoaded);

function modelLoaded() {
    console.log("Model is Loaded")
}
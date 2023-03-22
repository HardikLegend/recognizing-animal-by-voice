var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4IKXk2U4R/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error , results)
{
    if(error)
    {
        console.error(error)
    }
    else
    {
        console.log(results)
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_detected").innerHTML = "Detected Dog - " +dog+ "Detected Cat - "+cat+ "Detected Lion - " +lion+ "Detected Cow - "+cow;
        document.getElementById("result_detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("result_label").innerHTML = "Detected Voice is Of - " + results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    }
}
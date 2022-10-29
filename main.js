function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OPZVu-F4O/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OPZVu-F4O/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_r = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_r+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_r+","+random_number_r+")";

        img = document.getElementById('img');

        if(results[0].label == "Barking"){
            img.src = 'dog.png';
        } else if(results[0].label == "Meowing"){
            img.src = 'cat.jpg';
        } else if(results[0].label == "Mooing"){
            img.src = 'cow.jpg';
        } else if(results[0].label == "Roar"){
            img.src = 'lion.jpg';
        } else {
            img.src = 'ear.jpg';
        }
    }
}
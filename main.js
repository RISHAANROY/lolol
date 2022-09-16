
var SpeechRecognition=window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start()
{
   document.getElementById("textbox").innerHTML="";
   recognition.start();
}

recognition.onresult= function(event) {

  console.log(event);

    var Content =event.results[0][0].transcript;
    console.log(Content);

    document.getelementById("textbox").innerHTML=Content;
    console.log(event);
    speak();
}

function speak() {
  var synth = window.speechSynthesis;

  Speak_data = document.getElementById("textbox").value;

  var utterThis= new SpeechSynthesisUtterrance(speak_data);

  synth.speak(utterThis);
  Webcam.attach(camera)
}

Webcam.set({
  width:360,
  Height:250,
  image_format: 'png',
  png_quality: 90,
});
camera = document.getElementById("camera");
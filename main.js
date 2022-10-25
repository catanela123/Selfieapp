var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var textbox=document.getElementById("textbox");
function start()
{
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    Textbox.innerHTML=Content;
    console.log(Content);
    if(Content=="Toma mi selfie")
    {
        console.log("Tomando selfie --- ");
        speak();
    }

}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Tomando tu Selfie en 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_selfie();
        save();
    },5000);
  }
  camera = document.getElementByID("camera");

  Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    });
    
}
  

   
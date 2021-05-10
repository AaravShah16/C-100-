 var SpeechRecognition = window.webkitSpeechRecognition
 var Recognition = new SpeechRecognition()
 function start(){
     document.getElementById("textbox").innerHTML = ""
     Recognition.start()
 }
 Recognition.onresult = function(event){
     console.log(event)
     var Content = event.results[0][0].transcript
     document.getElementById("textbox").innerHTML = Content
     console.log(Content)
     if (Content == "take my selfie"){
         console.log("taking selfie ----")
         speak()
     }
 }
 function speak(){
     var synth = window.speechSynthesis
     var speakdata = "taking your selfie in five seconds"
     var Utterthis = new SpeechSynthesisUtterance(speakdata)
     synth.speak(Utterthis)
     Webcam.attach(camera)
     setTimeout(function(){
         takesnapshot()
         save()
     
     },5000)
 }
 camera = document.getElementById("camera")
 Webcam.set({
     width: 350,
     height: 250,
     image_format: "jpeg", jpeg_quality: 90
 })
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "selfie_image" src = "'+ data_uri +'">'
    })
}
function save(){
link = document.getElementById("link")
image = document.getElementById("selfie_image").src
link.href = image
link.click()
}
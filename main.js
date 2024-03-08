function setup() {
    canvas = createCanvas(1014, 543);
    canvas.position(152,138);
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
  }
  function clearCanvas() {
    background("white");
  }
  function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
  }
  function draw() {
    // Establece el grosor del trazo (strokeWeight) a 13
    strokeWeight(7);
    // Establece el color del trazo (stroke) a negro (black)
    stroke(0);
  


    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }}
    function classifyCanvas() {
        classifier.classify(canvas, gotResult);
      }
      function gotResult(error, results) {
        if (error) {
          console.error(error);
        }
        console.log(results);
        document.getElementById('label').innerHTML = 'Etiqueta: ' + results[0].label;
      
        document.getElementById('confidence').innerHTML = 'Confianza: ' + Math.round(results[0].confidence * 100) + '%';
      
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
      }
      
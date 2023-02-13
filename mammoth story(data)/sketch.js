//Text source: https://en.wikipedia.org/wiki/Mammoth

let joinedText;
let alphabet;
let drawLetters = [];

let posX;
let posY;

let drawLines = false;
let drawText = true;

let button;
let col;

function preload() {
  joinedText = loadStrings('data/mammoth story.txt');
}

function setup() {
  createCanvas(800, windowHeight);
  let col = color(25, 23, 200, 50);
let button = createButton('Please move your mouse');
button.style('background-color', col);

  button.parent("gui-container");
  button.addClass("button");
  button.position(250, 600);
  button.mousePressed(random(40,60));

  textFont('monospace', 20);
  fill(87, 35, 129);

  joinedText = joinedText.join(' ');
  alphabet = getUniqCharacters();
  for (var i = 0; i < alphabet.length; i++) {
    drawLetters[i] = true;
  }
}

function changeBG() {
  var val = random(255);
  background(val);
}

function draw() {
  background(255);

  posX = 20;
  posY = 40;
  var oldX = 0;
  var oldY = 0;


  for (var i = 0; i < joinedText.length; i++) {
    
    var upperCaseChar = joinedText.charAt(i).toUpperCase();
    var index = alphabet.indexOf(upperCaseChar);
    if (index < 0) continue;

    var sortY = index * 20 + 40;
    var m = map(mouseX, 50, width - 50, 0, 1);
    m = constrain(m, 0, 1);
    var interY = lerp(posY, sortY, m);

    if (drawLetters[index]) {
      if (drawLines) {
        if (oldX != 0 && oldY != 0) {
          stroke(181, 157, 0, 100);
          line(oldX, oldY, posX, interY);
        }
        oldX = posX;
        oldY = interY;
      }

      if (drawText) {
        noStroke();
        text(joinedText.charAt(i), posX, interY);
      }
    } else {
      oldX = 0;
      oldY = 0;
    }

    posX += textWidth(joinedText.charAt(i));
    if (posX >= width - 200 && upperCaseChar == ' ') {
      posY += 30;
      posX = 20;
    }
  }
}

function getUniqCharacters() {
  var charsArray = joinedText.toUpperCase().split('');
  var uniqCharsArray = charsArray.filter(function(char, index) {
    return charsArray.indexOf(char) == index;
  }).sort();
  return uniqCharsArray.join('');
}

function keyReleased() {
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');

  if (key == '1') drawLines = !drawLines;
  if (key == '2') drawText = !drawText;
  if (key == '3') {
    for (var i = 0; i < alphabet.length; i++) {
      drawLetters[i] = false;
    }
  }
  if (key == '4') {
    drawText = true;
    for (var i = 0; i < alphabet.length; i++) {
      drawLetters[i] = true;
    }
  }

  var index = alphabet.indexOf(key.toUpperCase());
  if (index >= 0) {
    drawLetters[index] = !drawLetters[index];





  }
}

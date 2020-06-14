var numSquares = 6;
var colors = GenerateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.getElementById("message");
var resetbutton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var homebtn = document.querySelector("#homebtn");
var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;


homebtn.addEventListener("click",function(){
  location.href = "/index.html";
});

easyBtn.addEventListener("click",function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares=3;
  colors = GenerateRandomColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i=0;i<squares.length;i++)
  {
    if(colors[i])
    squares[i].style.background = colors[i];
    else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click",function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares=6;
  colors = GenerateRandomColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i=0;i<squares.length;i++)
  {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
    }
});


resetbutton.addEventListener("click",function(){
  colors = GenerateRandomColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i=0;i<squares.length;i++)
  {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
});


for(var i=0; i < squares.length; i++)
{
  squares[i].style.background = colors[i];

   squares[i].addEventListener("click",function()
  {
  var clickedcolor = this.style.background;
  if(clickedcolor===pickedColor)
  {
    messageDisplay.textContent = "Correct";
    changeColors(pickedColor);
    h1.style.background = pickedColor;
    resetbutton.textContent = "Play Again?";
  }
  else{
    this.style.background = "#232323";
    messageDisplay.textContent = "Try Again";
  }
});
}

function changeColors(color) {
  for(var i=0; i < squares.length; i++)
  {
    squares[i].style.background = color;
}
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function GenerateRandomColor(num) {
  var arr=[]

  for(var i=0;i<num;i++)
  {
    arr.push(RandomColor());
  }
  return arr;
}

function RandomColor() {

  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

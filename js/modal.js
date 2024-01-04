
var modal1 = document.getElementById("modal-proyecto-1");
var modal2 = document.getElementById("modal-proyecto-2");
var modal3 = document.getElementById("modal-proyecto-3");

var btn1 = document.getElementById("btn-proyecto-1");
var btn2 = document.getElementById("btn-proyecto-2");
var btn3 = document.getElementById("btn-proyecto-3");

var span1 = document.getElementById("close-1");
var span2 = document.getElementById("close-2");
var span3 = document.getElementById("close-3");

btn1.onclick = function () {
  modal1.style.display = "flex";
  document.body.style.overflow = "hidden";
};

span1.onclick = function () {
  modal1.style.display = "none";
  document.body.style.overflow = "scroll";
};

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
    document.body.style.overflow = "scroll";
  }
};

btn2.onclick = function () {
  modal2.style.display = "flex";
  document.body.style.overflow = "hidden";
};

span2.onclick = function () {
  modal2.style.display = "none";
  document.body.style.overflow = "scroll";
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
    document.body.style.overflow = "scroll";
  }
};

btn3.onclick = function () {
  modal3.style.display = "flex";
  document.body.style.overflow = "hidden";
};

span3.onclick = function () {
  modal3.style.display = "none";
  document.body.style.overflow = "scroll";
};

window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
    document.body.style.overflow = "scroll";
  }
};
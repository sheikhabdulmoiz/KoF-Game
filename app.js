var count = 200;
var count1 = 1100;
window.onkeydown = function () {
  console.log(event.keyCode);
  //---------------------------------TERRY---------------------------------------

  var terry1 = document.getElementById("terry1");
  if (event.keyCode === 39) {
    terry1.src = "images/terry2.gif";
    count = count + 70;
    terry1.style.left = count + "px";
    setTimeout(function () {
      terry1.src = "images/terry1.gif";
    }, 350);
  }
  if (event.keyCode === 37) {
    terry1.src = "images/terry3.gif";
    count = count - 70;
    terry1.style.left = count + "px";
    setTimeout(function () {
      terry1.src = "images/terry1.gif";
    }, 350);
  }
  if (event.keyCode === 191) {
    terry1.src = "images/terrypower.gif";
    setTimeout(function () {
      terry1.src = "images/terry1.gif";
    }, 1150);
  }
    if (event.keyCode === 16) {
      terry1.src = "images/terrypower2.gif";
      setTimeout(function () {
        terry1.src = "images/terry1.gif";
      }, 1150);
    }
    if (event.keyCode === 190) {
      terry1.src = "images/terrykick.gif";
      setTimeout(function () {
        terry1.src = "images/terry1.gif";
      }, 750);
    }

    //---------------------------------OROCHI---------------------------------------

    var orochi1 = document.getElementById("orochi1");
    if (event.keyCode === 68) {
      orochi1.src = "images/orochi2.gif";
      count1 = count1 + 50;
      orochi1.style.left = count1 + "px";
      setTimeout(function () {
        orochi1.src = "images/orochi1.gif";
      }, 200);
    }
    if (event.keyCode === 65) {
      orochi1.src = "images/orochi1.gif";
      count1 = count1 - 30;
      orochi1.style.left = count1 + "px";
      setTimeout(function () {
        orochi1.src = "images/orochi1.gif";
      }, 200);
    }

    if (event.keyCode === 75) {
      orochi1.src = "images/orochikick.gif";
      setTimeout(function () {
        orochi1.src = "images/orochi1.gif";
      }, 1100);
    }

    if (event.keyCode === 76) {
      orochi1.src = "images/orochipunch.gif";
      setTimeout(function () {
        orochi1.src = "images/orochi1.gif";
      }, 1100);
    }

    if (event.keyCode === 87) {
      orochi1.src = "images/orochijump.gif";
      setTimeout(function () {
        orochi1.src = "images/orochi1.gif";
      }, 1000);
    }
  
  }

function UnityProgress(gameInstance, progress) {
var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

  if (!gameInstance.Module)
    return;
  if (!gameInstance.logo) {
    gameInstance.logo = document.createElement("div");
    gameInstance.logo.className = "logo " + gameInstance.Module.splashScreenStyle;
    gameInstance.container.appendChild(gameInstance.logo);
  }
  if (!gameInstance.progress) {
    gameInstance.progress = document.createElement("div");
    gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;
    gameInstance.progress.empty = document.createElement("div");
    gameInstance.progress.empty.className = "empty";
    gameInstance.progress.appendChild(gameInstance.progress.empty);
    gameInstance.progress.full = document.createElement("div");
    gameInstance.progress.full.className = "full";
    gameInstance.progress.appendChild(gameInstance.progress.full);
    gameInstance.container.appendChild(gameInstance.progress);
  }
  gameInstance.logo.onmouseup = function(){
    CreateLinksInGame('Drag-n-Merge','logo','logo');
  }

  gameInstance.container.onmouseup = function()
  {
  if(!iOSSafari)
    openLink();
  }
  gameInstance.progress.full.style.width = (100 * progress) + "%";
  gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";
  if (progress == 1)
  {
    gameInstance.logo.style.display = gameInstance.progress.style.display = "none";
    //if(iOSSafari)
    {
    //CANVAS TOUCH
    var canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');
    var finalX=0;
    var finalY=0;
    canvas.addEventListener('click', (e) => {

      });
    var mousePos = { x:0, y:0 };
    canvas.addEventListener("mousedown", function (e) {
        mousePos = { x:0, y:0 };
    }, false);
    canvas.addEventListener("mouseup", function (e) {
    mousePos = getMousePos(canvas, e);
     finalX=(mousePos.x*504)/canvas.width;
     finalY=(mousePos.y*800)/canvas.height;
     if(finalX>13 && finalX<75 && finalY>14 && finalY<75)
     openLink();
     else if(finalX>414 && finalX<497 && finalY>710 && finalY<779)
     openLink();
     console.log(finalX,finalY);
    }, false);

    // Set up touch events for mobile, etc
    canvas.addEventListener("touchstart", function (e) {
            //mousePos = getTouchPos(canvas, e);
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvas.dispatchEvent(mouseEvent);

    }, false);

    canvas.addEventListener("touchend", function (e) {
      e.preventDefault();
      var touch = e.changedTouches[0];

      //mousePos = getTouchPos(canvas, e);

      var mouseEvent = new MouseEvent("mouseup", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvas.dispatchEvent(mouseEvent);

    }, false);
    }
  }
}
function openLink(){
if (btnIdLogo>0 && isLogoClicked==true ) {
  switch (btnIdLogo)
    {
        case 1:
            CreateLinksInGame('Drag-n-Merge','GameScene','logo');
            break;
        case 2:
            CreateLinksInGame('Drag-n-Merge','PauseScene','logo');
            break;
        case 3:
            CreateLinksInGame('Drag-n-Merge','GameoverScene','logo');
            break;
        case 4:
            CreateLinksInGame('Drag-n-Merge','MenuScene','logo');
            break;
    }
    btnIdLogo=-1;
    isLogoClicked=false;
    }

     else if (btnIdMore>0 && isMoreClicked==true ) {

       switch (btnIdMore)
         {
             case 1:
                 CreateLinksInGame('Drag-n-Merge','GameScene','logo');
                 break;
             case 2:
                 CreateLinksInGame('Drag-n-Merge','PauseScene','logo');
                 break;
             case 3:
                 CreateLinksInGame('Drag-n-Merge','GameoverScene','logo');
                 break;
             case 4:
                 CreateLinksInGame('Drag-n-Merge','MenuScene','logo');
                 break;
         }
         btnIdMore=-1;
         isMoreClicked=false;
     }
}
function getMousePos(canvasDom, mouseEvent) {
var rect = canvasDom.getBoundingClientRect();
return {
x: mouseEvent.clientX - rect.left,
y: mouseEvent.clientY - rect.top
};
}
function getTouchPos(canvasDom, touchEvent) {
  var rect = canvasDom.getBoundingClientRect();

  return {
  x: touchEvent.touches[0].clientX - rect.left,
  y: touchEvent.touches[0].clientY - rect.top
  };
}

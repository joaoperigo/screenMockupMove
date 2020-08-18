//Build values from objects
var site = document.getElementById("site"); 
var mobile = document.getElementById("mobile"); 
var siteImgWidth = '0'; //img file width
var siteImgHeight = '0'; //img file height
var mobileImgHeight = mobile.offsetHeight; //screen height size

//get scrolled img size values (from the file)
getImgSize('img/site.png');
function getImgSize(imgSrc) {
  var newImg = new Image();
  newImg.src = imgSrc;
  siteImgWidth = newImg.width;
  siteImgHeight = newImg.height;
}

//set size of scrolled div getting mobile mockup img element values
site.style.height = (mobileImgHeight - 70) + 'px';
site.style.width = siteImgWidth + 'px';

//activate animation
function move() {
    buttonActivate = document.getElementById("activateScroll"); //if button is clicked again it will bug
    buttonActivate.disabled = true; //disable button for a moment
    var posSiteY = 0;
    var scrollSite = setInterval(frame, 10);
    function frame() { 
      if (posSiteY == siteImgHeight - mobileImgHeight) {
        clearInterval(scrollSite); //stop the movement
        buttonActivate.disabled = false; //enable button
      } else {
        //if you want a infinite loop remove the if and use only this two lines bellow
        posSiteY++; 
        site.style.backgroundPosition = '0 -' + posSiteY + 'px'; 
      }
    }
  }

//activate animation with ease
/*
function move() {
  var posSiteY = 1;
  var i = 0; //have to separate the counter from the movement value
  var scrollSite = setInterval(frame, 10);
  function frame() {
    if (posSiteY > siteImgHeight - mobileImgHeight) {
      clearInterval(scrollSite);
    } else {
      i++; 
      posSiteY = posSiteY*1.04; //here is the magic. After each loop the movement wil be faster, by bigger values, using multiplication
      site.style.backgroundPosition = '0 -' + posSiteY + 'px'; 
    }
  }
} */
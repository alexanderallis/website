"use strict";

$(function(){
  var nav = $('#about-content'),
      animateTime = 500,
      navLink = $('#about');
  navLink.click(function(){
    if(nav.height() === 0){
      autoHeightAnimate(nav, animateTime);
    } else {
      nav.stop().animate({ height: '0' }, animateTime);
    }
  });
})

/* Function to animate height: auto */
function autoHeightAnimate(element, time){
  	var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    	  element.height(curHeight); // Reset to Default Height
    	  element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}


//-SCROLL-HORIZONTALLY----->

(function() {
function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-.35, Math.min(.35, (e.wheelDelta || -e.detail)));
    document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40
    document.body.scrollLeft -= (delta*40); // Multiplied by 40
    e.preventDefault();
}
if (window.addEventListener) {
    // IE9, Chrome, Safari, Opera
    window.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
    // IE 6/7/8
    window.attachEvent("onmousewheel", scrollHorizontally);
}
})();




// var aboutCon = $("#about-content");
// var state = false;
// var height = aboutCon.get(0).scrollHeight;
// console.log(height);
// $("#about").on('click', function() {
//
// // aboutCon.toggleClass("height-increase");
//
// console.log("hahaJones");
// // var stateNumber = state ? 0 : 'auto';
//
//
// if (state = true){
// aboutCon.animate({
//     height: aboutCon.get(0).scrollHeight
// }, 1000, function(){
//     $(this).height(0);
// });
// // console.log(stateNumber);
// var state = false;
// }
//
// if (state = false){
//   aboutCon.animate({
//       height: aboutCon.get(0).scrollHeight
//   }, 1000, function(){
//       $(this).height("'"+height+"'");
//   });
//   // console.log(stateNumber);
//   var state = true;
// }
//
// });
//
// var arrow = $(".arrow");
// $(".arrow").on('click', function(){
//     console.log("hahaPhones");
//
//   $(this).toggleClass("rotate");
// })

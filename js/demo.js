/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#fbc531',
    lineColor: '#dcdde1',
    density: '8000',
    parallax: false,
    lineWidth: 0.2,
    directionX: 'right',
    directionY: 'up',
    particleRadius: 4
    

  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

$('#typeit').typeIt({
     strings: ['a Web Developer','an Android Developer','an Entrepreneur','a Freelancer'],
     speed: 100,
    breakLines: false,
     autoStart: true,
    loop:true
});


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
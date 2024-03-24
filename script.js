function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function() {
  var p2Element = document.querySelector('.section__text__p2');

  var typingSpeed = 100; // milliseconds
  var textToType = "Student Programmer";
  var index = 0;

  function typeText() {
    if (index < textToType.length) {
      p2Element.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeText, typingSpeed);
    } else {
      // Kapag natapos ang pag-type, ibalik sa simula
      setTimeout(eraseText, 1000); // Tantyahin ang oras bago magsimula ang pag-alis ng teksto
    }
  }

  function eraseText() {
    var textLength = p2Element.textContent.length;
    if (textLength > 0) {
      p2Element.textContent = p2Element.textContent.substring(0, textLength - 1);
      setTimeout(eraseText, typingSpeed);
    } else {
      // Kapag natapos ang pag-alis, simulan ang pag-type mula sa simula
      index = 0;
      setTimeout(typeText, 1000); // Tantyahin ang oras bago magsimula ang pag-type muli
    }
  }

  // Simulan ang pag-type mula sa simula
  setTimeout(typeText, 1000); // Tantyahin ang oras bago magsimula ang pag-type
});







var canvasDots = function() {
  var homeScreen = $('#one');
  var canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d'),
  colorDot = 'black',
  color = 'black';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';
  ctx.fillStyle = colorDot;
  ctx.lineWidth = .3;
  ctx.strokeStyle = color;



  var mousePosition = {
      x: 30 * canvas.width / 100,
      y: 30 * canvas.height / 100
  };

  // window.innerWidth > window.innerHeight ? window.innerWidth/2 : window.innerHeight/2

  var dots = {
      nb: window.innerWidth < window.innerHeight ? window.innerWidth/2 : window.innerHeight/2,
      distance: window.innerWidth > window.innerHeight ? window.innerWidth/25 : window.innerHeight/25,
      d_radius: window.innerWidth > window.innerHeight ? window.innerWidth/10 : window.innerHeight/10,
      array: []
  };


  var resizeTimer;

  $(window).on('resize', function(e) {

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          ctx.fillStyle = colorDot;
          ctx.lineWidth = .1;
          ctx.strokeStyle = color;

          dots = {
              nb: window.innerWidth < window.innerHeight ? window.innerWidth/1.25 : window.innerHeight/1.25,
              distance: window.innerWidth > window.innerHeight ? window.innerWidth/25 : window.innerHeight/25,
              d_radius: window.innerWidth > window.innerHeight ? window.innerWidth/10 : window.innerHeight/10,
              array: []
          };
      }, 250);
  });

 function Dot(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = -.5 + Math.random();
    this.vy = -.5 + Math.random();

    // Palakihin ang radius ng bawat dot
    this.radius = Math.random() * 1.8;
}


  Dot.prototype = {
      create: function(){
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fill();
      },

      animate: function(){
          for(i = 0; i < dots.nb; i++){

              var dot = dots.array[i];

              if(dot.y < 0 || dot.y > canvas.height){
                  dot.vx = dot.vx;
                  dot.vy = - dot.vy;
              }
              else if(dot.x < 0 || dot.x > canvas.width){
                  dot.vx = - dot.vx;
                  dot.vy = dot.vy;
              }
              dot.x += dot.vx;
              dot.y += dot.vy;
          }
      },

      line: function(){
          for(i = 0; i < dots.nb; i++){
              for(j = 0; j < dots.nb; j++){
                  i_dot = dots.array[i];
                  j_dot = dots.array[j];

                  if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                      if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                          ctx.beginPath();
                          ctx.moveTo(i_dot.x, i_dot.y);
                          ctx.lineTo(j_dot.x, j_dot.y);
                          ctx.stroke();
                          ctx.closePath();
                      }
                  }
              }
          }
      }
  };

  function createDots(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for(i = 0; i < dots.nb; i++){
          dots.array.push(new Dot());
          dot = dots.array[i];

          dot.create();
      }

      dot.line();
      dot.animate();
  }

  window.onmousemove = function(parameter) {
      mousePosition.x = parameter.pageX;
      mousePosition.y = parameter.pageY - $(window).scrollTop();
  }

  homeScreen.on('touchstart', function(event){
      mousePosition.x = event.changedTouches[0].pageX;
      mousePosition.y = event.changedTouches[0].pageY;
  });

  mousePosition.x = window.innerWidth / 2;
  mousePosition.y = window.innerHeight / 2;

  setInterval(createDots, 1000/30);
};

window.onload = function() {
  canvasDots();
};

function sendEmail() {
  var emailAddress = 'nickolandermilan30@gmail.com';

  var mailtoLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(emailAddress);

  // Open Gmail compose window
  window.location.href = mailtoLink;
}

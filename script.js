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
  colorDot = 'purple',
  color = 'purple';
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


document.getElementById("toggleProjectsButton").addEventListener("click", function() {
  var projectsSection = document.getElementById("projects2");
  var toggleButton = document.getElementById("toggleProjectsButton");
  
  if (projectsSection.style.display === "none") {
      projectsSection.style.display = "block";
      toggleButton.textContent = "Hide Projects";
  } else {
      projectsSection.style.display = "none";
      toggleButton.textContent = "Show Projects";
  }
});

document.getElementById("toggleSections").addEventListener("click", function() {
  var projectsSection = document.getElementById("Tools");
  var toggleButton = document.getElementById("toggleSections");
  
  if (projectsSection.style.display === "none") {
      projectsSection.style.display = "block";
      toggleButton.textContent = "Hide tools";
  } else {
      projectsSection.style.display = "none";
      toggleButton.textContent = "Show tools";
  }
});


const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");
const imgEls = document.querySelectorAll("img");
const imageContainerEl = document.querySelector(".image-container");
let currentImg = 1;
let timeout;

prevEl.addEventListener("click", () => {
    clearTimeout(timeout);
    currentImg--;
    updateImg();
});

nextEl.addEventListener("click", () => {
    clearTimeout(timeout);
    currentImg++;
    updateImg();
});

updateImg();

function updateImg() {
    if (currentImg > imgEls.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgEls.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}

const arrowBtns = document.querySelectorAll('.arrow-btn')
const cardBtns = document.querySelectorAll('.card')
let currentCard = 2;
let dir = 1;
moveCards()

arrowBtns.forEach((btn,i)=>{
  btn.onpointerenter = (e)=> gsap.to(btn, {
    ease:'expo',
    'box-shadow':'0 3px 4px #00000050'
  })
  
  btn.onpointerleave = (e)=> gsap.to(btn, {
    ease:'expo',
    'box-shadow':'0 6px 8px #00000030'
  })
  
  btn.onclick = (e)=> {
    dir = (i==0)? 1:-1
    if (i==0) {
      currentCard--
      currentCard = Math.max(0, currentCard)
    }
    else {
      currentCard++
      currentCard = Math.min(4, currentCard)
    }
    moveCards(0.75)
  }
})

cardBtns.forEach((btn,i)=>{
  btn.onpointerenter = (e)=> gsap.to(btn, {
    ease:'power3',
    overwrite:'auto',
    'box-shadow':()=>(i==currentCard)?'0 6px 11px #00000030':'0 6px 11px #00000030'
  })
  
  btn.onpointerleave = (e)=> gsap.to(btn, {
    ease:'power3',
    overwrite:'auto',
    'box-shadow':()=>(i==currentCard)?'0 6px 11px #00000030':'0 0px 0px #00000030'
  })

  btn.onclick = (e)=> {
    dir = (i<currentCard)? 1:-1
    currentCard = i
    moveCards(0.75)
  }
})

function moveCards(dur=0){
  gsap.timeline({defaults:{ duration:dur, ease:'power3', stagger:{each:-0.03*dir} }})
    .to('.card', {
      x:-270*currentCard,
      y:(i)=>(i==currentCard)?0:15,
      height:(i)=>(i==currentCard)?270:240,
      ease:'elastic.out(0.4)'
    }, 0)
    .to('.card', {
      cursor:(i)=>(i==currentCard)?'default':'pointer',
      'box-shadow':(i)=>(i==currentCard)?'0 6px 11px #00000030':'0 0px 0px #00000030',
      border:(i)=>(i==currentCard)?'2px solid #26a':'0px solid #fff',
      background:(i)=>(i==currentCard)?'radial-gradient(100% 100% at top, #fff 0%, #fff 99%)':'radial-gradient(100% 100% at top, #fff 20%, #eee 175%)',
      ease:'expo'
    }, 0)
    .to('.icon svg', {
      attr:{
        stroke:(i)=>(i==currentCard)?'transparent':'#36a',  
        fill:(i)=>(i==currentCard)?'#36a':'transparent'
      }
    }, 0)
    .to('.arrow-btn-prev', {
      autoAlpha:(currentCard==0)?0:1
    }, 0)
    .to('.arrow-btn-next', {
      autoAlpha:(currentCard==4)?0:1
    }, 0)
    .to('.card h4', {
      y:(i)=>(i==currentCard)?0:8,    
      opacity:(i)=>(i==currentCard)?1:0,
    }, 0)
}



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

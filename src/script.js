
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    let name = document.getElementById("name");
    let logo = document.getElementById("logo");
    let menu = document.getElementById("menu");
    let phrase = document.getElementById("turn");

    name.classList.add("glitch");
    logo.classList.add("glitch");
    menu.classList.add("glitch");
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {

        name.classList.add("glitch");
        logo.classList.add("glitch");
        menu.classList.add("glitch");
        phrase.innerText = 'Turn off glitch'

      } else {
        name.classList.remove("glitch");
        logo.classList.remove("glitch");
        menu.classList.remove("glitch");
        phrase.innerText = 'Turn on glitch'
      }
    });
  });
const btn = document.querySelectorAll('.tabs-container__btn');
const tabs = document.querySelectorAll('.tabs-block');

(function() {
  for (let i = 0; btn[i]; i++) {
    btn[i].addEventListener("click", function() {
      for (let j = 0; tabs[j]; j++) {
        if (btn[i].value == j) {
          tabs[j].classList.remove("none");
          btn[j].style.border = '1px solid silver';
        } else {
          tabs[j].classList.add("none");
          btn[j].style.border = 'none';
        }
      }
    });
  }
})();

(function () {
  const tabs = document.querySelectorAll('.TabsContainer__item');
  const mainBlock = document.querySelectorAll('.TabsContainer__content');
  for (let i = 0; tabs[i]; i++) {
    tabs[i].addEventListener('click', () => {
      for (let j = 0; mainBlock[j]; j++) {
        if (tabs[i].dataset.tab == mainBlock[j].dataset.content) {
          mainBlock[j].classList.remove('hide');
          tabs[j].classList.add('active');
        } else {
          mainBlock[j].classList.add('hide');
          tabs[j].classList.remove('active');
        }
      }
    });
  }
}());

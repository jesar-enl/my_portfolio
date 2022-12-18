const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition() {
  // active btn
  for (const element of sectBtn) {
    element.addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace(
        'active-btn',
        ''
      );
      this.className += ' active-btn';
    });
  }

  //active class section
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other button
      sectBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);

      element.classList.add('active');
    }
  });
}

PageTransition();

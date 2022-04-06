const accordion = document.querySelectorAll('.js-accordion');

accordion.forEach(acc => {
  acc.addEventListener('click', showAccordion);

  function showAccordion() {
    let parentAccordion = acc.parentElement;
    parentAccordion.classList.toggle('active');
  }
})
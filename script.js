const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    const item = title.parentElement;
    const content = item.querySelector('.accordion-content');

    item.classList.toggle('show');
    content.classList.toggle('show');
  });
});

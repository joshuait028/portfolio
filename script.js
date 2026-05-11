document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  );

  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });

  const pageLinks = Array.from(document.querySelectorAll('a[href]'))
    .filter(link => {
      const href = link.getAttribute('href');
      return (
        href &&
        !href.startsWith('#') &&
        !href.startsWith('mailto:') &&
        !href.startsWith('tel:') &&
        !href.startsWith('javascript:') &&
        !link.hasAttribute('target') &&
        link.origin === location.origin
      );
    });

  pageLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      document.body.classList.add('fade-out');
      window.setTimeout(() => {
        window.location.href = link.href;
      }, 320);
    });
  });
});

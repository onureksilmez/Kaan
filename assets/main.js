(function () {
  var y = document.getElementById('yil');
  if (y) y.textContent = new Date().getFullYear();

  // Bölümler ekrana girerken hafifçe belirsin
  var els = document.querySelectorAll('.sec-head, .group, .feat, .steps li, .gal figure, .contact__txt, .map');
  if (!('IntersectionObserver' in window)) return;
  els.forEach(function (el) { el.classList.add('rv'); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (el) { io.observe(el); });

  // Mobilde dokunulan sigorta "açılsın"
  document.querySelectorAll('.cb').forEach(function (cb) {
    cb.addEventListener('click', function () { cb.classList.toggle('on'); });
  });
})();

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var recipient = 'jamillahairconrefservices@gmail.com';
    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var address = form.elements.address.value.trim();
    var phone = form.elements.phone.value.trim();
    var message = form.elements.message.value.trim();

    var button = form.querySelector('button[type="submit"]');
    button.textContent = 'Opening Email...';
    button.disabled = true;

    var subject = 'Service Inquiry from ' + (name || 'Website Visitor');
    var body = [
      'Name: ' + name,
      'Email: ' + email,
      'Address: ' + address,
      'Phone: ' + phone,
      '',
      'Message:',
      message,
      '',
      'Sent from Jamillah Aircon & Refrigerator Services website.'
    ].join('\n');

    var mailto = 'mailto:' + recipient +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    window.location.href = mailto;

    setTimeout(function () {
      button.textContent = 'Send Message';
      button.disabled = false;
      form.reset();
    }, 2000);
  });
});

/* Neon hover cursor script (adds soft light follow and hover interactions)
   Only activates for elements with the `neon-hover` class. */
(function(){
  function initNeon() {
    var cursor = document.createElement('div');
    cursor.className = 'neon-cursor';
    document.body.appendChild(cursor);

    var active = false;
    var hoverEls = Array.prototype.slice.call(document.querySelectorAll('.neon-hover'));

    hoverEls.forEach(function(el){
      el.addEventListener('mouseenter', function(){
        active = true;
        cursor.style.opacity = '1';
        el.classList.add('neon-hover-active');
      });
      el.addEventListener('mouseleave', function(){
        active = false;
        cursor.style.opacity = '0';
        el.classList.remove('neon-hover-active');
      });
      el.addEventListener('mousemove', function(e){
        // expose local mouse coords (optional, not required for the cursor)
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        el.style.setProperty('--_nx', x + 'px');
        el.style.setProperty('--_ny', y + 'px');
      });
    });

    document.addEventListener('mousemove', function(e){
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      if(active){
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      } else {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.6)';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNeon);
  } else {
    initNeon();
  }
})();

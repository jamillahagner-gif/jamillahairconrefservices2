
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var button = form.querySelector('button[type="submit"]');
    var name = form.querySelector('input[name="name"]').value.trim();
    var email = form.querySelector('input[name="email"]').value.trim();
    var address = form.querySelector('input[name="address"]').value.trim();
    var phone = form.querySelector('input[name="phone"]').value.trim();
    var message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !address || !phone || !message) {
      alert('Please fill in all the required fields.');
      return;
    }

    button.textContent = 'Sending...';
    button.disabled = true;

    fetch(form.action, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(form)
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json().catch(function () {
          return {};
        });
      })
      .then(function () {
        button.textContent = 'Message Sent';
        setTimeout(function () {
          button.textContent = 'Send Message';
          button.disabled = false;
          form.reset();
        }, 2000);
      })
      .catch(function () {
        button.textContent = 'Send Message';
        button.disabled = false;
        alert('Unable to send message right now. Please try again in a moment.');
      });
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
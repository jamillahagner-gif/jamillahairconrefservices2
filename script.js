/* Contact Form Native Action Routing */
const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function(e) {
    // 1. Inject the necessary access key directly into the form structure
    let hiddenKeyInput = form.querySelector('input[name="access_key"]');
    if (!hiddenKeyInput) {
        hiddenKeyInput = document.createElement('input');
        hiddenKeyInput.type = 'hidden';
        hiddenKeyInput.name = 'access_key';
        form.appendChild(hiddenKeyInput);
    }
    hiddenKeyInput.value = "ffa5a7ad-f06c-45aa-a9c2-af6d205d41fe";

    // 2. Let the form submit normally to Web3Forms without background fetch blocks
    // This completely bypasses Chrome's local browser network block restrictions!
  });
}

/* Neon hover cursor script (Kept completely intact) */
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

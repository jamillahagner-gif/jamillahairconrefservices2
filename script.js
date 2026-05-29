const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('button[type="submit"]');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Use pure JSON data structure to bypass laptop CORS/Content-Type blocks
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    object.access_key = "ffa5a7ad-f06c-45aa-a9c2-af6d205d41fe";
    const json = JSON.stringify(object);

    fetch('https://web3forms.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let res = await response.json();
        if (response.status === 200 || res.success) {
            alert("Thankyou! Your message was finally sent!");
            form.reset();
        } else {
            alert("Submission error: " + res.message);
        }
    })
    .catch(error => {
        console.log(error);
        alert("Network block. Please check your internet connection.");
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
  });
}

/* Neon hover cursor script (adds soft light follow and hover interactions) */
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

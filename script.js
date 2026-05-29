const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.set("access_key", "ffa5a7ad-f06c-45aa-a9c2-af6d205d41fe");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://web3forms.com", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            // Updated your custom plain alert text here
            alert("Thankyou! Your message was finally sent!");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
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

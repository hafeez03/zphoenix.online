/* ESOLTECH GitHub Pages Forms - no PHP required */
(function () {
  'use strict';

  const FORM_ENDPOINT = 'https://formsubmit.co/ajax/hafeez_03@hotmail.com';

  function showStatus(form, selector, message, ok) {
    const el = form.querySelector(selector);
    if (!el) return;
    el.textContent = message;
    el.classList.remove('text-success', 'text-danger');
    el.classList.add(ok ? 'text-success' : 'text-danger');
  }

  function bindForm(formId, statusSelector, successMessage) {
    const form = document.getElementById(formId);
    if (!form || form.dataset.bound === 'true') return;
    form.dataset.bound = 'true';

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (!form.checkValidity()) {
        showStatus(form, statusSelector, 'Please fill in all required fields correctly.', false);
        return false;
      }

      const btn = form.querySelector('button[type="submit"]');
      const oldText = btn ? btn.textContent : '';
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Please wait...';
      }

      showStatus(form, statusSelector, '', true);

      try {
        const endpoint = form.getAttribute('data-endpoint') || FORM_ENDPOINT;
        const response = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        let result = {};
        try { result = await response.json(); } catch (_) {}

        if (!response.ok || (result.success && String(result.success).toLowerCase() === 'false')) {
          throw new Error(result.message || 'Unable to submit the form. Please try again.');
        }

        form.reset();
        showStatus(form, statusSelector, successMessage, true);
      } catch (err) {
        showStatus(form, statusSelector, err.message || 'Unable to submit the form. Please try again.', false);
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.textContent = oldText;
        }
      }

      return false;
    }, true);
  }

  function initForms() {
    bindForm('contact-us-form', '.contact-form-status', 'Thank you. Your message has been sent successfully.');
    bindForm('subscribe-form', '.subscribe-form-status', 'Thank you for subscribing.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForms);
  } else {
    initForms();
  }
})();

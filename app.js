// Simple signup handler — client-side only demo
// Replace with real endpoint in production
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.signup-form');
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value.trim();
      if (!email || !email.includes('@')) return;

      const successBox = form.parentElement.querySelector('.success-box');
      form.classList.add('hidden');
      if (successBox) {
        successBox.classList.add('active');
        successBox.querySelector('.success-email').textContent = email;
      }

      // Sync all other forms on the page
      document.querySelectorAll('.signup-form').forEach((f) => {
        if (f !== form) {
          f.classList.add('hidden');
          const sib = f.parentElement.querySelector('.success-box');
          if (sib) {
            sib.classList.add('active');
            const emailNode = sib.querySelector('.success-email');
            if (emailNode) emailNode.textContent = email;
          }
        }
      });
    });
  });
});

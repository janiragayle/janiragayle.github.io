const form = document.querySelector('.newsletter-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const email = formData.get("email");

  const response = await fetch(form.action, {
    method: "POST",
    body: new URLSearchParams({ email })
  });

  if (response.ok) {
    form.innerHTML = `<p style="color:#8c6bc4;">Thanks for subscribing! 💌</p>`;
  } else {
    alert("Oops! Something went wrong. Try again later.");
  }
});

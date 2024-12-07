document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // لمنع إعادة تحميل الصفحة
  const name = document.getElementById('name').value;

  alert(`Thank you, ${name}! We will get back to you soon.`);
});

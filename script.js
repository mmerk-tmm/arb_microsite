document.getElementById('consultationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  })
  .then(() => {
    window.location.href = 'thanks.html';
  })
  .catch(error => {
    alert('Ошибка при отправке формы. Попробуйте позже.');
    console.error('Error:', error);
  });
});
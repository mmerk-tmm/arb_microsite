function toggleAlternative(radio) {
  const warning = document.getElementById("warningMessage");
  const mainForm = document.getElementById("mainForm");
  const altForm = document.getElementById("altForm");

  if (radio.value === "До 250 000 рублей") {
    warning.classList.remove("hidden");
    mainForm.style.display = "none";
    altForm.classList.remove("hidden");
  } else {
    warning.classList.add("hidden");
    mainForm.style.display = "block";
    altForm.classList.add("hidden");
  }
}

// Отправка формы
document.getElementById("consultationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json'
    }
  })
  .then(() => {
    window.location.href = "thanks.html";
  })
  .catch(error => {
    alert("Ошибка при отправке формы");
    console.error("Error:", error);
  });
});
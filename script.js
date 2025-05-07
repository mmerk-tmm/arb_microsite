function toggleAlternative(radio) {
  const warning = document.getElementById("warningMessage");
  const mainForm = document.getElementById("mainForm");
  const altForm = document.getElementById("altForm");

  if (radio.value === "До 250 000 рублей") {
    warning.style.display = "block";
    mainForm.style.display = "none";
    altForm.classList.remove("hidden");
  } else {
    warning.style.display = "none";
    mainForm.style.display = "block";
    altForm.classList.add("hidden");
  }
}

document.getElementById("consultationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  })
  .then(() => {
    window.location.href = "thanks.html";
  })
  .catch(error => {
    alert("Ошибка при отправке формы");
    console.error("Error:", error);
  });
}); 
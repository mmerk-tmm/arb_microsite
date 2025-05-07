let currentStep = 0;
const steps = document.querySelectorAll(".form-step");

function showStep(n) {
  steps.forEach((step, index) => {
    step.classList.toggle("hidden", index !== n);
    step.classList.toggle("active", index === n);
  });
}

function nextStep() {
  const current = steps[currentStep];
  const requiredFields = current.querySelectorAll("[required]");

  // Простая валидация
  let isValid = true;
  requiredFields.forEach(field => {
    if (!field.checkValidity()) {
      field.reportValidity();
      isValid = false;
    }
  });

  if (!isValid) return;

  // Логика для условия "маленькая сумма долга"
  const debtAmount = document.querySelector('input[name="debt_amount"]:checked');
  if (currentStep === 0 && debtAmount && debtAmount.value === "До 250 000 рублей") {
    document.querySelector(".form-warning").classList.remove("hidden");
    document.querySelectorAll(".form-step:not(.form-warning)").forEach(step => step.classList.add("hidden"));
    return;
  }

  currentStep++;
  if (currentStep >= steps.length) {
    document.getElementById("consultationForm").submit();
    return;
  }
  showStep(currentStep);
}

function prevStep() {
  currentStep--;
  showStep(currentStep);
}

// Показывать поля в 2 столбца, если это радио- или чекбокс-группа
document.querySelectorAll(".form-step").forEach(step => {
  const radiosOrCheckboxes = step.querySelectorAll("div > input[type='radio'], div > input[type='checkbox']");
  if (radiosOrCheckboxes.length > 2) {
    step.style.display = "grid";
    step.style.gridTemplateColumns = "repeat(2, 1fr)";
    step.style.gap = "1rem";
  }
});

showStep(currentStep);
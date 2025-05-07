let currentStep = 0;
const steps = document.querySelectorAll(".form-step");

// Показываем нужный шаг
function showStep(n) {
  steps.forEach((step, index) => {
    step.classList.toggle("hidden", index !== n);
    step.classList.toggle("active", index === n);
  });
}

// Переход к следующему шагу
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

// Назад
function prevStep() {
  currentStep--;
  showStep(currentStep);
}

showStep(currentStep);
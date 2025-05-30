const inputs = document.querySelectorAll('.input-month');
const totalSpan = document.getElementById('total');

function updateTotal() {
  let total = 0;
  inputs.forEach(input => {
    total += parseFloat(input.value) || 0;
  });
  totalSpan.textContent = total.toFixed(2);
}

inputs.forEach(input => {
  input.addEventListener('input', updateTotal);
});

// PWA install
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
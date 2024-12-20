document.getElementById('paymentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const salary = parseFloat(document.getElementById('salary').value);

  if (salary <= 0) {
    alert('Por favor, insira um salário bruto válido.');
    return;
  }

  let tax = 0;
  if (salary >= 5000.00) {
    tax = salary * 0.175;
  } else if (salary >= 4000.00) {
    tax = salary * 0.12;
  } else if (salary >= 3000.00) {
    tax = salary * 0.075;
  } else if (salary >= 1800.00) {
      tax = salary * 0.035;
  } else {
      tax = 0
  }

  const netSalary = salary - tax;

  const tableBody = document.querySelector('#recordTable tbody');
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>R$ ${salary.toFixed(2)}</td>
    <td>R$ ${tax.toFixed(2)}</td>
    <td>R$ ${netSalary.toFixed(2)}</td>
  `;
  tableBody.appendChild(newRow);

  document.getElementById('name').value = '';
  document.getElementById('salary').value = '';
});

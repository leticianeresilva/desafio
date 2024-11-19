document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const salary = parseFloat(document.getElementById('salary').value);
  
    if (isNaN(salary) || salary <= 0) {
      alert('Por favor, insira um salário bruto válido.');
      return;
    }
  

    let tax = 0;
    if (salary >= 5000) {
      tax = salary * 0.175;
    } else if (salary >= 4000) {
      tax = salary * 0.12;
    } else if (salary >= 3000) {
      tax = salary * 0.075;
    } else if (salary >= 1800) {
        tax = salary * 0.035;
    } else {
        tax = 0
    }
   
    const netSalary = salary - tax;
  

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Salário Bruto:</strong> R$ ${salary.toFixed(2)}</p>
      <p><strong>Imposto:</strong> R$ ${tax.toFixed(2)}</p>
      <p><strong>Salário Líquido:</strong> R$ ${netSalary.toFixed(2)}</p>
    `;
    resultDiv.style.display = 'block';
  });
  

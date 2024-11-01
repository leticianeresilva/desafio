function calculateDebt() {
    // Obtendo os valores dos inputs
    const debtAmount = parseFloat(document.getElementById('debt-amount').value);
    const timeValue = parseInt(document.getElementById('time-value').value, 10);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);

    // Verificando se os valores são válidos
    if (debtAmount < 0 || timeValue < 0 || interestRate < 0) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    // Cálculo da dívida usando a fórmula dos juros compostos
    const totalDebt = debtAmount * Math.pow(1 + interestRate / 100, timeValue);

    // Exibindo o resultado
    document.getElementById('result').innerText = `Total da Dívida: R$ ${totalDebt.toFixed(2)}`;
}

// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
    e.preventDefault();

    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(function () {
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';

        // UI vars
        const amount = document.getElementById('amount');
        const interest = document.getElementById('interest');
        const years = document.getElementById('years');
        const monthlyPayment = document.getElementById('monthly-payment');
        const totalPayment = document.getElementById('total-payment');
        const totalInterest = document.getElementById('total-interest');

        const principal = parseFloat(amount.value);
        const calculatedInterest = parseFloat(interest.value) / 100 / 12;
        const calculatedPayments = parseFloat(years.value) * 12;

        // computer monthly payment
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal * x * calculatedInterest) / (x - 1);

        if (isFinite(monthly)) {
            monthlyPayment.value = monthly.toFixed(2);
            totalPayment.value = (monthly * calculatedPayments).toFixed();
            totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        } else {
            document.getElementById('results').style.display = 'none';
            showError('Please check your inputs');
        }
    }, 1000);
});

function showError(message) {
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(message));

    card.insertBefore(errorDiv, heading);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}
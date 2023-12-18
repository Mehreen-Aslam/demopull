function enableFields() {
    var selectedAccount = document.querySelector('input[name="accountType"]:checked').value;
    var paymentAmountField = document.getElementById('paymentAmount');
    var interestRateField = document.getElementById('interestRate');

    // Disable fields by default
    paymentAmountField.disabled = true;
    interestRateField.disabled = true;

    // Enable relevant fields based on the selected account type
    if (selectedAccount === 'Loan') {
        paymentAmountField.disabled = false;
    } else if (selectedAccount === 'CD' || selectedAccount === 'Loan') {
        interestRateField.disabled = false;
    }
}

function saveData() {
    // Implement logic to save data (you may want to use AJAX to send data to a server)

    // Display a saved message
    alert("Data saved successfully");

    // Clear the screen
    clearFields();
}

function clearFields() {
    // Clear all input fields
    document.getElementById('accountNumber').value = '';
    document.getElementById('initialBalance').value = '';
    document.getElementById('currentBalance').value = '';
    document.getElementById('paymentAmount').value = '';
    document.getElementById('interestRate').value = '';

    // Clear the selected radio button
    var radioButtons = document.getElementsByName('accountType');
    radioButtons.forEach(function (radioButton) {
        radioButton.checked = false;
    });
}

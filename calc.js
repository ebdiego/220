function interestAdd() {
    var principalInput = document.getElementById('pInput').value;
    var interestInput = document.getElementById('iInput').value;
    var timeInput = document.getElementById('tInput').value;
    document.getElementById('interestResults').innerHTML = "With a beginning principal of "+ " " + principalInput + "and with a growth rate of  " + " " + interestInput + "for " + " " + timeInput + "years, your total interest will be " + " " + (principalInput * 1 *interestInput * timeInput);
}
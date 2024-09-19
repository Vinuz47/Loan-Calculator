function calculateLoan(){
    let loanAmount = parseFloat(document.getElementById("loan-amount").value);

    let interestRateValue = parseFloat(document.getElementById("interest-rate").value);

    let monthsToBePay = parseFloat(document.getElementById("months-to-pay").value);

    let interest = loanAmount * interestRateValue * 0.01*monthsToBePay/12;
    console.log(interest);

    let monthlyPayment = parseFloat((loanAmount + interest)/monthsToBePay).toFixed(2);
    console.log(loanAmount + interest);
    document.getElementById("payment").innerHTML = `Monthly Payment: Rs.${monthlyPayment}`;
}
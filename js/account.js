const balanceValue = document.getElementById("balanceDisplay");

const depositeValue = document.getElementById("dipositeDisplay");

const withdrawValue = document.getElementById("withdrawDisplay");

const depositeInput = document.getElementById("depositeAmount");

const withdrawInput = document.getElementById("withdrawAmount");

const depositeBtn = document.getElementById('depositeBtn');

const withdrawBtn = document.getElementById('withdrawBtn');


// addEventlistener
depositeBtn.addEventListener('click', handleDepositeBtn);
withdrawBtn.addEventListener('click', handleWithdrawBtn);

function handleDepositeBtn() {
    let depositeInputValue = depositeInput.value;
    let newDepositeAmount = parseFloat(depositeInputValue);
    let balanceAmount = parseFloat(balanceValue.innerHTML);
    let prevDepositAmount = parseFloat(depositeValue.innerHTML);
    let finalBalance = newDepositeAmount + balanceAmount;
    let finalDepositeAmount = prevDepositAmount + newDepositeAmount;

    balanceValue.innerText = finalBalance;
    depositeValue.innerText = finalDepositeAmount;
    depositeInput.value = "";
}


function handleWithdrawBtn() {
    let withdrawInputValue = withdrawInput.value;
    let newwithdrawAmount = parseFloat(withdrawInputValue);
    let balanceAmount = parseFloat(balanceValue.innerHTML);
    let prewithdrawAmount = parseFloat(withdrawValue.innerHTML);
    let finalBalance = balanceAmount - newwithdrawAmount;
    let finalwithdrawAmount = prewithdrawAmount + newwithdrawAmount;

    balanceValue.innerText = finalBalance;
    withdrawValue.innerText = finalwithdrawAmount;
    withdrawInput.value = "";
}
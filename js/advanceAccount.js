// getting btn and addEventListener
const depositeBtn = document.getElementById('depositeBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

// addEventlistener
depositeBtn.addEventListener('click', handleDepositeBtn);
withdrawBtn.addEventListener('click', handleWithdrawBtn);

function getInput(id) {
    const inputText = document.getElementById(id);
    const inputValue = parseFloat(inputText.value);
    inputText.value = '';
    return inputValue;
}

function getCurrentBalance() {
    const prevBalanceText = document.getElementById("balanceDisplay");
    return prevBalanceText;
}


// update deposite/withdraw  
function updatePreviousValue(id, amount) {
    const prevTextValue = document.getElementById(id);
    const prevValue = parseFloat(prevTextValue.innerHTML);
    prevTextValue.innerHTML = prevValue + amount;

    // to update the main balance
    updateMainBalance(id, amount);
}

function updateMainBalance(id, amount) {
    const prevBalanceText = getCurrentBalance();
    const prevBalanceValue = parseFloat(prevBalanceText.innerHTML);
    if (id === "dipositeDisplay") {
        prevBalanceText.innerHTML = prevBalanceValue + amount;
    } else {
        prevBalanceText.innerHTML = prevBalanceValue - amount;
    }
}


// deposite btn handler
function handleDepositeBtn() {
    const inputAmount = getInput("depositeAmount");
    if (inputAmount > 0) {
        updatePreviousValue("dipositeDisplay", inputAmount);
    }
}

// withdraw btn handler
function handleWithdrawBtn() {
    const inputAmount = getInput("withdrawAmount");
    const prevBalanceValue = parseFloat(getCurrentBalance().innerHTML);
    if (inputAmount > 0 && inputAmount <= prevBalanceValue) {
        updatePreviousValue("withdrawDisplay", inputAmount);
    }
}


document.getElementById('enter-deposit').addEventListener('click', function(){

  const newDepositAmount = getInputFieldValubyID ('deposit-input');


  const previousDepositTotal = getElementTextbyId('deposit-old-new-amount');
  
  const newDepositTotal = previousDepositTotal +  newDepositAmount;
  
  setTextElementById('deposit-old-new-amount', newDepositTotal)
  const previousBalanceTotal = getElementTextbyId('balace-total');
  const balanceNowTotal = previousBalanceTotal + newDepositAmount;
  setTextElementById('balace-total', balanceNowTotal)

});


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrowAmount = getInputFieldValubyID('withdraw-input');
    const previousWithdrawTotal = getElementTextbyId ('withdraw-text');
    const newOldWithdrowTotal = newWithdrowAmount + previousWithdrawTotal;
  
    setTextElementById('withdraw-text', newOldWithdrowTotal);
  
    const previousBalanceTotal = getElementTextbyId ('balace-total');
    const balanceTotal = previousBalanceTotal - newWithdrowAmount;
    setTextElementById('balace-total', balanceTotal);
  });
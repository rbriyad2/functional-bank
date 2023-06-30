function getInputFieldValubyID (inputID){
    const inputField =document.getElementById(inputID);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value ='';
    return inputFieldValue;
  }
  
  function getElementTextbyId (elementId){
    const textElement = document.getElementById(elementId);
    const elementString = textElement.innerText;
    const elementValue = parseFloat(elementString)
    return elementValue;
  }
  
  function setTextElementById ( elementId, newValue ){
    const textElement =document.getElementById(elementId);
    textElement.innerText = newValue;
  }
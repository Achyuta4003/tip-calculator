
window.onload = function () {
// cached elements ==========
const form = document.getElementById("form");
const inputBill = document.getElementById("inputBill");
const tipPercentage = document.getElementById("percentage");
const percentageOutput = document.getElementById("percentageOutput");
const output = document.getElementById("tipOutput");
const totalBill = document.getElementById("totalBill");

// event listeners ==========
form.addEventListener("change", calculateTip);
tipPercentage.oninput = calculateTip;

// event handlers ==========
function calculateTip() {
  const tipAmt = (inputBill.value * (tipPercentage.value / 100)).toFixed(2);
  const billAmt = (Number(inputBill.value)  +Number(tipAmt) );
  
  //display Tip Amount
  output.innerText = `$ ${tipAmt}`;

  //display total Amount
  totalBill.innerText = `$ ${billAmt}`;

  //displayPercentage
  percentageOutput.innerText = `${tipPercentage.value}%`;
}
}

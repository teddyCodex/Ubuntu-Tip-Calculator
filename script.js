const billInput = document.querySelector(".bill-input");
const customTipInput = document.querySelector(".custom");
const sharersInput = document.querySelector(".sharers-input");

const btn5Per = document.querySelector(".btn5per");
const btn10Per = document.querySelector(".btn10per");
const btn15Per = document.querySelector(".btn15per");
const btn25Per = document.querySelector(".btn25per");
const btn50Per = document.querySelector(".btn50per");

const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");

const resetBtn = document.querySelector(".reset-btn");

const errorMsgShare = document.getElementById("span");
const errorMsgBill = document.getElementById("bill");

// Add event listeners to the tip selector buttons
btn5Per.addEventListener("click", function () {
  tipPercentage = 0.05;
  error();
  if (billInput.value !== "" && sharersInput.value !== "") {
    tipCalc();
    totalCalc();
  }
});
btn10Per.addEventListener("click", function () {
  tipPercentage = 0.1;
  error();
  if (billInput.value !== "" && sharersInput.value !== "") {
    tipCalc();
    totalCalc();
  }
});
btn15Per.addEventListener("click", function () {
  tipPercentage = 0.15;
  error();
  if (billInput.value !== "" && sharersInput.value !== "") {
    tipCalc();
    totalCalc();
  }
});
btn25Per.addEventListener("click", function () {
  tipPercentage = 0.25;
  error();
  if (billInput.value !== "" && sharersInput.value !== "") {
    tipCalc();
    totalCalc();
  }
});
btn50Per.addEventListener("click", function () {
  tipPercentage = 0.5;
  error();
  if (billInput.value !== "" && sharersInput.value !== "") {
    tipCalc();
    totalCalc();
  }
});

// Instruction for custom field
customTipInput.addEventListener("input", function () {
  if (billInput.value !== "" && sharersInput.value !== "") {
    // console.log(customTipInput.value / 100);
    tipPercentage = customTipInput.value / 100;
    tipCalc();
    totalCalc();
  }
});

// Function to calculate tips payable per person
function tipCalc() {
  tipPayable = (billInput.value * tipPercentage) / sharersInput.value;
  tipPayable = Math.round(tipPayable * 100) / 100;
  tipAmount.innerHTML = `$${tipPayable}`;
}

// Function to calculate total amount payable per person
function totalCalc() {
  totalPayable =
    Number(billInput.value) / Number(sharersInput.value) + tipPayable;
  totalPayable = Math.round(totalPayable * 100) / 100;
  totalAmount.innerHTML = `$${totalPayable}`;
}

// Function to display error message on zero input
function error() {
  if (sharersInput.value === "") {
    errorMsgShare.classList.remove("hidden");
  } else {
    errorMsgShare.classList.add("hidden");
  }
  if (billInput.value === "") {
    errorMsgBill.classList.remove("hidden");
  } else {
    errorMsgBill.classList.add("hidden");
  }
}

// Reset Button Functionality

resetBtn.addEventListener("click", function () {
  billInput.value = "";
  billInput.placeholder = 0;
  customTipInput.value = "";
  customTipInput.placeholder = "Custom";
  sharersInput.value = "";
  sharersInput.placeholder = 0;
  tipAmount.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
});

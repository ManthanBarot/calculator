let result = document.getElementById("result");

function insert(num) {
  result.innerHTML += num;
}

function clearScreen() {
  result.innerHTML = "";
}

function backspace() {
  result.innerHTML = result.innerHTML.slice(0, -1);
}

function calculate() {
  let expression = result.innerHTML;
  let regex = /[+\-*/]/g;
  let operators = expression.match(regex);
  let numbers = expression.split(regex).map(Number);
  let total = numbers[0];
  
  for (let i = 0; i < operators.length; i++) {
    let operator = operators[i];
    let number = numbers[i+1];
    
    switch (operator) {
      case '+':
        total += number;
        break;
      case '-':
        total -= number;
        break;
      case '*':
        total *= number;
        break;
      case '/':
        total /= number;
        break;
      default:
        break;
    }
  }
  
  result.innerHTML = total;
}

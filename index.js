// Selecting button and h1 to change it to h5
document.querySelector("#convert").addEventListener("click", function () {
  const h1 = document.querySelector("#chng");
  h1.innerHTML = "<h5>Now this is a H5!</h5>";
});

// Selecting the h1 and button to change the text content
document.querySelector("#change").addEventListener("click", function () {
  const h1 = document.querySelector("#f4th-h1");
  h1.textContent = "I mean it's still a H1";
});

// Changing background color of H1
document.querySelector("#hover").addEventListener("mouseover", function () {
  this.classList.add("hover");
  // this.classList.toggle("hover"); //This is better in my opinion
});

const members = [
  "Sambhav Choudhary",
  "Vishwa Jadhav",
  "Muhammed Shaheen",
  "Archita Dubey",
];

// Logging member names
document.querySelector("#mems").addEventListener("click", function () {
  let inp = Number(document.querySelector("#last").value);

  if (inp === 7) {
    console.log(members);
  } else {
    console.log(`You have given the input: ${inp}. But why?!`);
  }
});

// A small calculator.
document.querySelector("#check").addEventListener("click", function () {
  let n1 = Number(document.querySelector("#num1").value);
  let n2 = Number(document.querySelector("#num2").value);
  let op = document.querySelector("#op").value;

  let result = calculator(n1, n2, op);

  let display = document.querySelector("#result");

  display.textContent = result;
  console.log(result);
});

// The function used to calculate the result
function calculator(num1, num2, op) {
  switch (op) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    case "%":
      return num1 % num2;
      break;
    default:
      console.log("Wrong input!");
      break;
  }
}

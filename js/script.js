// Task 1
function f1() {
  const checkbox = document.getElementById("i-1");
  const output = document.getElementById("out-1");
  output.textContent = checkbox.checked ? "true" : "false";
}

document.getElementById("b-1").addEventListener("click", f1);

// Task 2
function f2() {
  const checkbox = document.getElementById("i-2");
  const output = document.getElementById("out-2");
  output.textContent = checkbox.checked ? checkbox.value : "false";
}

document.getElementById("b-2").addEventListener("click", f2);

// Task 3
function f3() {
  const password = document.getElementById("i-3").value;
  const output31 = document.getElementById("out-31");
  const output32 = document.getElementById("out-32");

  output31.textContent = password;
  output32.textContent = password.length >= 6 ? "1" : "0";
}

document.getElementById("b-3").addEventListener("click", f3);

// Task 4
function f4() {
  const radioButtons = document.querySelectorAll("input[name='stack']");
  const output = document.getElementById("out-4");

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      output.textContent = radioButton.value;
      break;
    }
  }
}

document.getElementById("b-4").addEventListener("click", f4);

// Task 5
function f5() {
  const colorPicker1 = document.getElementById("i-51").value;
  const colorPicker2 = document.getElementById("i-52");

  colorPicker2.value = colorPicker1;
}

document.getElementById("b-5").addEventListener("click", f5);

// Task 6
function f6() {
  const date = document.getElementById("i-6").value;
  const output = document.getElementById("out-6");

  output.textContent = date;
}

document.getElementById("b-6").addEventListener("click", f6);

// Task 7
function f7() {
  const range = document.getElementById("i-7").value;
  const output = document.getElementById("out-7");

  output.textContent = range;
}

document.getElementById("i-7").addEventListener("input", f7);

// Task 8
function f8() {
  const textInput = document.getElementById("i-8").value;
  const textArea = document.getElementById("t-8");
  const output = document.getElementById("out-8");

  output.textContent = textInput;
  textArea.value = textInput;
}

document.getElementById("b-8").addEventListener("click", f8);

// Task 9
function f9() {
  const select = document.getElementById("s-9").value;
  const output = document.getElementById("out-9");

  output.textContent = select;
}

document.getElementById("s-9").addEventListener("change", f9);

// Task 10
function f10(event) {
  event.preventDefault(); // Prevent the form from submitting

  const firstName = document.getElementById("inputFirstName").value;
  const lastName = document.getElementById("inputLastName").value;
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;
  const address = document.getElementById("inputAddress").value;
  const city = document.getElementById("inputCity").value;
  const region = document.getElementById("inputRegion").value;
  const zip = document.getElementById("inputZip").value;

  const output = document.getElementById("out-10");
  output.textContent = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Password: ${password}
    Address: ${address}
    City: ${city}
    Region: ${region}
    Zip: ${zip}
  `;
}

document.getElementById("task-10").addEventListener("submit", f10);

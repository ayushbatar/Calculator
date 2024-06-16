const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText == "AC") {
      display.value = "";
    } else if (e.target.tagName === "IMG") {
      display.value = display.value.slice(0, -1);
    } else if (e.target.id == "backspace") {
      display.value = display.value.slice(0, -1);
    } else if (display.value != "" && e.target.innerText == "=") {
      display.value = eval(display.value);
    } else if (display.value == "" && e.target.innerText == "=") {
      display.placeholder = "Error";
      setTimeout(() => (display.placeholder = ""), 2000);
    } else {
      display.value += e.target.innerText;
    }
  });
});

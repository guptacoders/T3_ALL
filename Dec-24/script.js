// Get the switch and body element
const switchElement = document.getElementById("myswitch");
const body = document.body;

// Check if the switch is checked and toggle the classes accordingly
switchElement.addEventListener("change", () => {
  if (switchElement.checked) {
    body.classList.add("bg-dark", "text-white"); // Dark mode
    body.classList.remove("bg-light", "text-dark");
  } else {
    body.classList.add("bg-light", "text-dark"); // Light mode
    body.classList.remove("bg-dark", "text-white");
  }
});

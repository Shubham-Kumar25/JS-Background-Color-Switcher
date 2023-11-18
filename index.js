const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    const id = e.target.id;

    if (id === "grey") {
      body.style.backgroundColor = id;
    }
    if (id === "white") {
      body.style.backgroundColor = id;
    }
    if (id === "blue") {
      body.style.backgroundColor = id;
    }
    if (id === "yellow") {
      body.style.backgroundColor = id;
    }
    if (id === "orange") {
      body.style.backgroundColor = id;
    }
  });
});

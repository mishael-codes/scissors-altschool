let hidden = document.querySelectorAll(".hide");

window.addEventListener("scroll", displayContent);

displayContent();

function displayContent() {
  let trigger = (window.innerHeight / 5) * 5;

  hidden.forEach((item) => {
    let itemTop = item.getBoundingClientRect().top;

    if (itemTop < trigger) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}